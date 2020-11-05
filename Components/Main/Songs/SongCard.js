/**
 * Individual Song Card
 */
import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import songContext from '../../../Contexts/songContext';


function SongCard({ song, onPress }) {

    const { songs } = useContext(songContext);

    const [ playing, setPlaying ] = useState(false);

    useEffect(() => {
        // console.log("Song card", song);
        // console.log("songs", songs.current);

        if (songs.current) {
            // console.log("Current Song ID", songs.current.id, song.id);
            /** if a song is currently playing, 
             * highlight the song */
            if (songs.current.id === song.id)   setPlaying(true);
            else setPlaying(false);
        } 

    }, [songs]);

    return (
        <Pressable style={styles.card} onPress={onPress}>

            <View style={styles.card_content}>
            
                <View
                    style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'coral',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <FontAwesome name="music" size={25} color="black" />
                </View>

                <View
                    style={{
                        padding: 5
                    }}
                >
                    <Text style={playing ? styles.current : styles.name}>
                        { song.title }
                    </Text>
                    <Text style={styles.artist}>
                        user
                    </Text>
                </View>
            </View>

        </Pressable>
    )    
}


/** Stylings for song card */
const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        height: 70,
        borderWidth: 1,
        borderColor: "white",
        borderBottomColor: "gainsboro",
        color: 'blue',
        marginBottom: 5
    },
    card_content: {
        flexDirection: 'row'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5
    },
    current: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'blue'
    },
    artist: {
        fontSize: 12
    }
});


export default SongCard;