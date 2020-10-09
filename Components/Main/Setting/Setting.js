/** Song Component */
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';
import userContext from '../../../Contexts/userContext';
import CustomButton from '../../SubComponents/CustomButton';


function Setting() {

    // context for auth flow
    const { setSignedIn } = useContext(userContext);


    // remove auth tokens from Async Storage
    const removeAuthToken = async () => {
        try {
            await AsyncStorage.removeItem('@authToken');
        } catch (e) {
            console.log("Error encountered", e);
        }
    } 


    // handle onPress Event of signout button
    const handleSignout = () => {
        try {
            removeAuthToken();
            setSignedIn(false);
        } catch(e) {
            console.log("Error Sign Out");
        }
    }

    return(
        <View style={styles.setting}>
            <Text style={styles.header}>Setting</Text>
            <CustomButton
                title="Profile"
                type= "setting"
                />
            <Button
                title="Sign Out"
                onPress={handleSignout}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    setting: {
        padding: 10
    },
    header: {
        marginBottom: 10
    }
})


export default Setting;