import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function CustomDiv({ title, content, type }) {

    const custom = styles[type];

    return(
        <View style={custom.view}>
            <Text style={custom.title}>
                {title}
            </Text>
            <Text>
                {content}
            </Text>
        </View>
    )
}


const styles = {
    profile: StyleSheet.create({
        view: {
            marginTop: 10,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gainsboro'
        },
        title: {
            fontSize: 15,
            fontWeight: '500',
            marginBottom: 20
        }
    })
}



export default CustomDiv;