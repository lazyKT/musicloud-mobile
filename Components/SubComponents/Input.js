import React from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';


/** Styling of TextInput */
const styles = StyleSheet.create({
    label: {
        marginTop: 5,
        marginLeft: 10,
        alignSelf: 'stretch', // similar with width: 100%,
        fontWeight: '600'
    },
    error: {
        color: 'lightcoral',
        marginTop: 2,
        marginLeft: 10,
        alignSelf: 'stretch'
    },
    input: {
        height: 35,
        borderColor: "gainsboro",
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
        alignSelf: 'stretch' // similar with width: 100%
    }
});


function Input(props) {

    const { title, name, value, inputOnChange, error } = props;

    return (
        <>
            {/* label */}
            <Text style={styles.label}>{title}</Text>
            {/* error */}
            { error && 
                <Text style={styles.error}>{`${name} must no be blank.*`}</Text>}
            {/* input */}
            <TextInput 
                style={styles.input}
                name={name}
                value={value}
                secureTextEntry={name === 'password'}
                onChange={ event => inputOnChange(name, event.nativeEvent.text)}
                />
        </>
    )
}

export default Input;