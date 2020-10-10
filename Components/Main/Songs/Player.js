import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


/** Music Player */
function Player({song}) {
    return (
        <View style={styles.container}>
            <Text> Music Player </Text>
            <Text>{song}</Text>
        </View>
    )
}


/** Styling for player */
const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Player;