import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../../SubComponents/CustomButton';


/** Modal for the avatar change/edit */
function EditAvatar({ cancelClick }) {

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