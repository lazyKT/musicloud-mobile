import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomDiv from '../../SubComponents/CustomDiv';


function Profile() {
    return(
        <View style={styles.profileContainer}>
            <Text style={styles.header} font>
                about me
            </Text>
            
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
    header: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
        textDecorationLine: 'underline'
    }
})


export default Profile;