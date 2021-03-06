import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import songContext from '../../../Contexts/songContext';


/** Music Player */
function Player({ onPress }) {

    const { songs } = useContext(songContext); 

    const [ isPlaying, setIsPlaying ] = useState(false);


    /** Play Button Press */
    const playBtnPress = _ => {
        setIsPlaying(!isPlaying);
    }


    useEffect(() => {
        // console.log("player", songs);
    },[songs]);

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                {/** song title and artist */}
                <Pressable 
                    style={styles.info}
                    onPress={ () => { 
                            if (songs && songs.current)
                                onPress();
                        }
                    }
                    >
                    <Text style={styles.title}>
                        { (songs && songs.current) ? songs.current.title : "-- --"} 
                    </Text>
                    <Text>
                        { (songs && songs.current) && "user" }
                    </Text>
                </Pressable>

                {/*  Play Button */}
                {
                    isPlaying 
                    ? <AntDesign name="pausecircleo" size={40} color="black" onPress={playBtnPress}/>
                    : <AntDesign name="playcircleo" size={40} color="black" onPress={playBtnPress}/>
                }
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