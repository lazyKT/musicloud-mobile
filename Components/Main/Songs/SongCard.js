/**
 * Individual Song Card
 */
import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
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
            <Text style={playing ? styles.current : styles.name}>
                { song.title }
            </Text>
            <Text style={styles.artist}>
                user
            </Text>
        </Pressable>
    )    
}


/** Stylings for song card */
const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderWidth: 1,
        borderColor: "white",
        borderBottomColor: "gainsboro",
        color: 'blue'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
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