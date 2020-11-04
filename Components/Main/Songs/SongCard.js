/**
 * Individual Song Card
 */
import React, { useEffect } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';


function SongCard({ name, artist, onPress }) {


    // useEffect(() => {
    //     console.log("Song Cards", name);
    // });

    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Text>{ name }</Text>
            <Text>{ artist }</Text>
        </Pressable>
    )    
}


/** Stylings for song card */
const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderWidth: 1,
        borderColor: "white",
        borderBottomColor: "gainsboro"
    }
});


export default SongCard;