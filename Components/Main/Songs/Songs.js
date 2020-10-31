/**
 * Songs to listen & download
 */
import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import songContext from '../../../Contexts/songContext';
import SongCard from './SongCard';


function Songs({ route }) {

    /** Dummy Song Data */
    const dummySongs = ["Nostalgia", "Thee Khan", "33", "Set Fire to the Rain"];

    const { setSongs } = useContext(songContext);

    /** get route params */
    const { title } = route.params;


    const onSongPress = song => {
        setSongs({
            current: song,
            all: dummySongs
        })
    }

    return(
        <View style={styles.container}>

             <Text>{ title }</Text>

            {/** Songs Container */}
            <View style={styles.songContainer}>
                {
                    dummySongs.map( (song, idx) =>
                        <SongCard name={song} key={idx} onPress={_ => onSongPress(song)} />
                    )
                }
            </View>

        </View>
    )
}


/** styling */
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    songContainer: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "white"
    },
    songCard: {
        padding: 10,
        borderWidth: 1,
        borderColor: "white",
        borderBottomColor: "gainsboro"
    }
})

export default Songs;