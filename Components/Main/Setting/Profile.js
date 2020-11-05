import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Modal, AsyncStorage } from 'react-native';
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';

import { fetchAvatarRequest, updateUsernameRequest, getUserRequest } from '../../NetworkRequests/users_requests';
import CustomDiv from '../../SubComponents/CustomDiv';
import EditAvatar from './EditAvatar';
import CustomButton from '../../SubComponents/CustomButton';
import useAsyncStorage from '../../CustomHooks/useAsyncStorage';


function Profile() {

    // fetch from AsyncStorage
    const { token, loaded } = useAsyncStorage();
    // user data from async storage
    const [ data, setData ] = useState(null);
    // user avatar url
    const [ avatarUrl, setAvatarUrl ] = useState('https://randomwordgenerator.com/img/picture-generator/52e3d24a4c5ab10ff3d8992cc12c30771037dbf85254794e732878d49748_640.jpg');
    // display modal ?
    const [ showModal, setShowModal ] = useState(false);
    // avatar
    const [ avatar, setAvatar ] = useState(null);
    // editing username
    const [ editing, setEditing ] = useState(false);


    // get Avatar from gallery/photos
    const getFromPhotos = (src) => {
        setAvatar(src);
        // hide modal after change
        setShowModal(false);
    }

    // fetch user avatar
    const fetchAvatar = async (id, access_token, signal) => {

        try {
            const request = await fetchAvatarRequest(id, access_token, signal);

            if (request === 200) 
                setAvatarUrl(`http://127.0.0.1:5000/avatar/${id}`);

        } catch (error) {
            console.log(error);
        }
    }

    // fetch user details
    const fetchUserDetails = async (id, access_token, signal) => {

        try {
            const request = await getUserRequest(id, access_token, signal);

            const { response, status } = request;

            console.log("data before response", data);
            
            if (status === 200) {
                setData(response);
            }

        } catch (error) {
            console.log("Error Fetching userDetails", error);
        }
    }

    // edit username
    const editUsername = _ => {
        setEditing(true)
    }


    // cancel edit username
    const cancelEditing = _ => {
        setEditing(false);
    }

    // update username
    const updateUsername = async val => {

        try {
           const request = await updateUsernameRequest(data, token.access_token, val);

            if (request === 200) {

                setData({
                    ...data,
                    username: val
                })

                // updateAsyncStorage();
                console.log("username updated!!");

                setEditing(false);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        const abortController = new AbortController();

        if (loaded) {
            const { access_token, id } = token;
            fetchAvatar( id, access_token, abortController.signal );
            fetchUserDetails( id, access_token, abortController.signal );
        }


        // clean up
        return () => {
            abortController.abort();
        }

    }, [loaded]);


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
                editing={editing}
                onPress={editUsername}
                cancelEdit={cancelEditing}
                update={updateUsername}
                />

            <CustomDiv 
                title="Email"
                content={loaded ? token.email : " - - "}
                type="profile"
                editing={false}
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
    },
    usernameDiv: {
    }
})


export default Profile;