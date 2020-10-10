import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal } from 'react-native';
import CustomDiv from '../../SubComponents/CustomDiv';
import { TouchableHighlight } from 'react-native-gesture-handler';
import EditAvatar from './EditAvatar';


function Profile() {

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
                        uri: 'https://randomwordgenerator.com/img/picture-generator/52e3d24a4c5ab10ff3d8992cc12c30771037dbf85254794e732878d49748_640.jpg'
                    } : { uri: avatar}}
                    />
            </TouchableHighlight>
            
            <CustomDiv 
                title="Username"
                content="Kyaw Thit"
                type="profile"
                />

            <CustomDiv 
                title="Email"
                content="kyaw.thitlwin.me@gmail.com"
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