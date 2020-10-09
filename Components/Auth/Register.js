import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../SubComponents/Input';
import CustomButton from '../SubComponents/CustomButton';


function Register({ navigation }) {

    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>
                    Register
                </Text>

                {/* Username */}
                <Input 
                    title="Username"/>

                {/* Email Address */}
                <Input 
                    title="Email Address"/>

                {/* Password */}
                <Input 
                    title="Password"/>
                
                {/* Re-enter Password */}
                <Input 
                    title="Re-enter Password"/>
                
                {/* Registe Button */}
                <CustomButton title="Register" type="login"/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    form: {
        backgroundColor: "white",
        width: 300,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
})


export default Register;