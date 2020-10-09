import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


/** styling for custom button component */
const styels = StyleSheet.create({
    login: {
        alignSelf: 'stretch', // similar with width: 100%
        backgroundColor: "lightgreen",
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    register: {
        alignSelf: 'stretch',
        backgroundColor: "coral",
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    setting: {
        alignSelf: 'stretch',
        backgroundColor: "white",
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
    },
    settingTxt: {
        fontSize: 20
    },
    btnTxt: {
        fontSize: 15
    }
})

/** Custom button component */
function CustomButton(props) {

    // destructuring props
    const { title, type, handleOnClick } = props;

    /** render */
    return(
        <TouchableOpacity 
            style={styels[type]} 
            onPress={handleOnClick} 
            activeOpacity='1' 
            underlayColor={'gray'}>
            <Text style={type === 'setting' ? styels.settingTxt : styels.btnTxt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


export default CustomButton;