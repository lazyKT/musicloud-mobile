import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';


function CustomDiv({ title, content, type, editing, cancelEdit, onPress, update }) {

    // updated username
    const [ username, setUsername ] = useState(content);
    const [ usernameError, setUsernameError ] = useState(null);

    const custom = styles[type];

    // handle textinput onChange
    const handleOnChange = val => {

        setUsername(val);

        if (val.length < 4)
            setUsernameError("Username must have at least 4 charactors!");
        else 
            setUsernameError(false);

    }


    useEffect(() => {

        if (title === "Username") 
            setUsername(content);

    },[content]);


    return(
        <TouchableOpacity 
            style={ editing ? custom.editingView : custom.view} 
            onPress={onPress}
        >
            <Text style={custom.title}>
                {title}
            </Text>

            {
                usernameError &&
                <Text style={{ color: 'red' }}>{usernameError}</Text>
            }

            {
                editing ? 
                <View style={custom.edit}>
                    <View style={{width: '60%'}}>
                        <TextInput
                            name="username"
                            value={username}
                            autoCapitalize = 'none'
                            onChange={event => handleOnChange(event.nativeEvent.text)}
                            style={custom.input}
                        />
                    </View>

                    

                    <CustomButton
                        title="Save"
                        type="save"
                        handleOnClick={() => update(username)}
                    />

                    <CustomButton
                        title="Cancel"
                        type="cancelEdit"
                        handleOnClick={cancelEdit}
                    />
                </View>
                : 
                <View>
                    <Text>
                        {content}
                    </Text>
                </View>
            }
        </TouchableOpacity>
    )
}


const styles = {
    profile: StyleSheet.create({
        view: {
            height: 80,
            marginTop: 10,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gainsboro',
        },
        editingView: {
            height: 100,
            marginTop: 10,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gainsboro',
        },
        title: {
            fontSize: 15,
            fontWeight: '500',
            marginBottom: 20
        },
        edit: {
            flex: 1,
            flexDirection: 'row',
            width: '100%',
        },
        input: {
            borderWidth: 1, 
            borderColor: 'white', 
            borderBottomColor: 'gainsboro',
            marginRight: 50,
            paddingBottom: 5
        }
    })
}



export default CustomDiv;