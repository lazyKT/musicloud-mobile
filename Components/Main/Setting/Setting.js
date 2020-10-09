/** Song Component */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import userContext from '../../../Contexts/userContext';


function Setting() {

    // context for auth flow
    const { setSignedIn } = useContext(userContext);

    // handle onPress Event of signout button
    const handleSignout = () => {
        setSignedIn(false);
    }

    return(
        <View style={styles.setting}>
            <Text>Setting</Text>
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
})


export default Setting;