import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


/** styling for custom button component */
const styles = StyleSheet.create({
    login: {
        alignSelf: 'stretch',
        backgroundColor: "lightgreen",
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
    },
    register: {
        alignSelf: 'stretch',
        backgroundColor: "coral",
        margin: 10,
        padding: 10,
        width: 260,
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
    avatar: {
        alignSelf: 'stretch',
        backgroundColor: "white",
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderBottomColor: 'gainsboro',
        borderBottomWidth: 1
    },
    cancel: {
        width: 220,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
    },
    playlist: {
        alignSelf: 'stretch',
        backgroundColor: "white",
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
    },
    save: {
        padding: 2,
        paddingLeft: 20,
        alignSelf: 'flex-end'
    },
    cancelEdit: {
        padding: 2,
        paddingLeft: 20,
        alignSelf: 'flex-end'
    },
    saveTxt: {
        color: 'green',
        textDecorationLine: 'underline'
    },
    cancelTxt: {
        color: 'gray',
        textDecorationLine: 'underline'
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
        <TouchableHighlight 
            style={styles[type]} 
            onPress={handleOnClick} 
            underlayColor="gainsboro"
            activeOpacity={0.2}>
            <Text 
                style={
                    type === 'setting' ? styles.settingTxt 
                    : type === 'save' ? styles.saveTxt 
                    : type === 'cancelEdit' ? styles.cancelTxt 
                    : styles.btnTxt
                    }>
                {title}
            </Text>
        </TouchableHighlight>
    )
}


export default CustomButton;