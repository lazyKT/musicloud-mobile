import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Modal, AsyncStorage } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { fetchAvatarRequest } from '../../NetworkRequests/users_requests';
import CustomDiv from '../../SubComponents/CustomDiv';
import EditAvatar from './EditAvatar';
import { acc } from 'react-native-reanimated';


function Profile() {

    // user data from async storage
    const [ data, setData ] = useState(null);
    // user avatar url
    const [ avatarUrl, setAvatarUrl ] = useState('https://randomwordgenerator.com/img/picture-generator/52e3d24a4c5ab10ff3d8992cc12c30771037dbf85254794e732878d49748_640.jpg');
    // display modal ?
    const [ showModal, setShowModal ] = useState(false);
    // avatar
    const [ avatar, setAvatar ] = useState(null);


    // get Avatar from gallery/photos
    const getFromPhotos = (src) => {
        setAvatar(src);
        // hide modal after change
        setShowModal(false);
    }


    // get user details from persistant storage
    const getDataFromStorage = async _ => {

        try {
            const data = await AsyncStorage.getItem('@authToken');

            if (data != null) {
    
                const json = await JSON.parse(data);
                // console.log(json, json.id, json.username);
                setData(json);
            }

        } catch (error) {
            console.log("Error Fetching Data from Async Storage!");
        }
    };

    // fetch user avatar
    const fetchAvatar = async (id, access_token) => {

        try {
            const request = await fetchAvatarRequest(id, access_token);

            console.log("request", request);
            if (request === 200) 
                setAvatarUrl(`http://127.0.0.1:5000/avatar/${id}`);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getDataFromStorage();
    }, []);


    useEffect(() => {
        
        if (data) fetchAvatar(data.id, data.access_token);

    }, [data])


    return(
        <View style={styles.profileContainer}>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}>
                <EditAvatar 
                    cancelClick={() => setShowModal(false)}
                    pickAvatar={getFromPhotos}/>

            </Modal>

            <Text style={styles.header} font>
                about me
            </Text>

            <TouchableHighlight 
                style={styles.imgContinaer}
                underlayColor="#fff"
                activeOpacity={0.2}
                onPress={() => setShowModal(true)}>
                <Image 
                    style={styles.avatar}
                    source={!avatar ? {
                        uri: avatarUrl
                    } : { uri: avatar}}
                    />
            </TouchableHighlight>
            
            <CustomDiv 
                title="Username"
                content={data ? data.username : " - - "}
                type="profile"
                />

            <CustomDiv 
                title="Email"
                content={data ? data.email : " - - "}
                type="profile"
                />

        </View>
    )
}


/** stylings of component */
const styles = StyleSheet.create({
    profileContainer: {
        padding: 10,
        backgroundColor: 'white'
    },
    imgContinaer: {
        width: 70,
        margin: 10,
        borderRadius: 40,
        overflow: 'hidden'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
        textDecorationLine: 'underline'
    },
    avatar: {
        padding: 10,
        width: 70,
        height: 70
    }
})


export default Profile;