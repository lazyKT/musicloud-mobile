import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import songContext from '../../../Contexts/songContext';


/** Music Player */
function Player({ onPress }) {

    const { songs } = useContext(songContext); 


    /** Play Button Press */
    const playBtnPress = _ => {
        console.log("PLay Btn Pressed!");
    }


    useEffect(() => {
        console.log("player", songs);
    },[songs]);

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                {/** song title and artist */}
                <Pressable 
                    style={styles.info}
                    onPress={onPress}
                    >
                    <Text style={styles.title}>{
                        songs && songs.current} 
                    </Text>
                    <Text>Artist</Text>
                </Pressable>

                {/** Play Button */}
                <AntDesign name="playcircleo" size={40} color="black" onPress={playBtnPress}/>
            </View>
        </View>
    )
}


/** Styling for player */
const styles = StyleSheet.create({
    container: {
        height: 100,
        padding: 10,
        backgroundColor: "white"
    },
    innerView: {
        flex: 1,
        flexDirection: 'row'
    },
    info: {
        width: '80%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Player;