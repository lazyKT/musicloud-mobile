/** Song Component */
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


function Songs({ handleOnPress }) {

    let dummy = 'Rain Drops Keep Falling on my head';

    return(
        <View style={styles.container}>
            <Text>Songs</Text>
            <Pressable onPress={() => handleOnPress(dummy)}>
            <Text>{dummy}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default Songs;