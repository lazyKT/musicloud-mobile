/** Song Component */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Songs() {
    return(
        <View style={styles.container}>
            <Text>Songs</Text>
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