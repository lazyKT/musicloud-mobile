import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';
import userContext from '../../../Contexts/userContext';
import CustomButton from '../../SubComponents/CustomButton';


function Main({ navigation }) {

    // auth context
    const { setSignedIn } = useContext(userContext);

    // remove auth tokens from Async Storage
    const removeAuthToken = async () => {
        try {
            await AsyncStorage.removeItem('@authToken');
        } catch (e) {
            console.log("Error encountered", e);
        }
    } 


    // onPress Event of Profile Button
    const handleProfileClk = () => {
        navigation.navigate("Profile");
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
                handleOnClick={handleProfileClk}
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


export default Main;