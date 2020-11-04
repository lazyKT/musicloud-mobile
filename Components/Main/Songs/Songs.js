/**
 * Songs to listen & download
 */
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import songContext from '../../../Contexts/songContext';
import SongCard from './SongCard';
import { getMySongs } from '../../NetworkRequests/songs_requests';
import useAsyncStorage from '../../CustomHooks/useAsyncStorage';


function Songs({ route }) {

    /** get context */
    const { setSongs, songs } = useContext(songContext);
    /** get auth tokens from async storage */
    const { token, loaded } = useAsyncStorage();
    /** get route params */
    const { title } = route.params;

    // pressing on song card
    const onSongPress = song => {
        setSongs({
            ...songs,
            current: song,
        })
    }


    // fetch my songs
    const fetchMySongs = async ( access_token, singal ) => {

        try {
            const request = await getMySongs( access_token, singal );

            if (request.status === 200) {
                
                setSongs({
                    current: null,
                    all: request.songs.msg
                })
            }

        } catch (error) {
            console.error(error);
        }
    }


    // effects on fetching songs from server    
    useEffect(() => {

        const abortController = new AbortController();

        // console.log(loa)

        if (loaded) fetchMySongs(token.access_token, abortController.signal);

        // clean up
        return () => { abortController.abort(); }

    }, [loaded]);

    // useEffect(() => {

    //     // if (songs)
    //     //     console.log("my songs", songs.all, songs.current);
    //     // console.log("num of my songs", mySongs.length)
    // }, [songs]);

    // rendering
    return(
        <View style={styles.container}>

             <Text>{ title }</Text>


            {
                songs && songs.all.length > 0 ?
                
                (<View style={styles.songContainer}>
                    {
                        songs.all.map( (song, idx) =>
                            <SongCard 
                                song={song} key={idx} 
                                onPress={_ => onSongPress(song)} />
                        )
                    }
                </View>)
                : <Text> "Loading ..." </Text>
            }

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