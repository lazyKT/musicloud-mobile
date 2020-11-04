import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo';

import CustomButton from '../../SubComponents/CustomButton';


/** Modal for the avatar change/edit */
function EditAvatar({ cancelClick, pickAvatar }) {

    // avatar
    const [avatar, setAvatar] = useState(null);

    /**
     * Ask for permission to access photos(ios) or gallery(android)
     */
    useEffect(() => {
        // IIFE for permission check
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('You need to allow the app to access photos.');
                }
            }
        })();
    }, []);

    /** pick images from photos/gallery */
    const pickImage = async () => {
        let img = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(img);

        if (!img.cancelled) {
            pickAvatar(img.uri);
        }
    }


    return (
        <View style={styles.modal}>
            <View style={styles.modalContents}>
                <CustomButton
                    title="Take Photo"
                    type="avatar"
                    />
                <CustomButton
                    title="Load From Photos"
                    type="avatar"
                    handleOnClick={pickImage}
                    />
                <CustomButton
                    title="View Photo"
                    type="avatar"
                    />
                <CustomButton
                    title="Delete Avatar"
                    type="avatar"
                    />
            </View>
            <View>
                <CustomButton
                    title='Cancel'
                    type="cancel"
                    handleOnClick={cancelClick}
                    />
            </View>
        </View>
    )
}


/** Stylings */
const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContents: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    }
});


export default EditAvatar;