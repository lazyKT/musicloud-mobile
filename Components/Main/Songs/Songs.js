/**
 * Songs to listen & download
 */
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, Animated, Pressable } from 'react-native';

import songContext from '../../../Contexts/songContext';
import SongCard from './SongCard';
import { getMySongs } from '../../NetworkRequests/songs_requests';
import useAsyncStorage from '../../CustomHooks/useAsyncStorage';
import CustomHeader from './CustomHeader';
import { Ionicons } from '@expo/vector-icons';
import SearchSongs from './SearchSongs';


function Songs({ route }) {

    /** get context */
    const { setSongs, songs } = useContext(songContext);
    /** get auth tokens from async storage */
    const { token, loaded } = useAsyncStorage();
    /** get route params */
    const { title } = route.params;

    const [ searchClick, setSearchClick ] = useState(false);

    const scrollY = new Animated.Value(0);
    const diff_clamp = Animated.diffClamp(scrollY, 0, 50);
    const translateY = diff_clamp.interpolate({
        inputRange: [0,10],
        outputRange: [0,-30],
        extrapolate: 'clamp'
    });
    const opacity = diff_clamp.interpolate({
        inputRange: [0,50],
        outputRange: [1,0],
        extrapolate: 'clamp'
    });
    const headerHeight = diff_clamp.interpolate({
        inputRange: [0,50],
        outputRange: [50, 0],
        extrapolate: 'clamp'
    });


    // handle press event on search button
    const toggleSearchModal = () => {
        setSearchClick(!searchClick);
    }

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

            <Animated.View
                style={{
                    transform: [
                        { translateY: translateY }
                    ],
                    opacity,
                    height: headerHeight
                }}
            >
                <CustomHeader 
                    title={title}
                    onSearchClk={toggleSearchModal}
                />
            </Animated.View>

            {
                songs && songs.all.length > 0 &&
                <Animated.View
                    style={{
                        transform: [{translateY: translateY+20}]
                    }}
                >
                    <Pressable
                        style={styles.shuffle_all}
                    >
                        <Text style={{ color: 'white', paddingRight: 5, paddingEnd: 5}}>
                            Shuffle All
                        </Text>
                        <Ionicons name="md-shuffle" size={15} color="white" />
                    </Pressable>
                </Animated.View>
            }

            <Animated.ScrollView
                style={[
                    styles.scrollVIew,
                    {
                        
                    }
                ]}
                showsVerticalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={5}
                onScroll={ Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: { y: scrollY }
                            }
                        }
                    ],
                    { useNativeDriver: false }
                )}
            >

                {
                    (songs && songs.all.length > 0 ?
                    songs.all.map( (song, idx) =>
                        <SongCard 
                            song={song} key={idx} 
                            onPress={_ => onSongPress(song)} />
                    )
                    : <Text> "Loading ..." </Text>)
                }

                <SearchSongs 
                    title={title}
                    cancelSearch={toggleSearchModal}
                    visible={searchClick}
                    />
            </Animated.ScrollView>
        </View>
    )
}


/** styling */
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    scrollVIew: {
        flex: 1
    },
    shuffle_all: {
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'green',
        padding: 5,
        paddingLeft: 10,
        paddingStart: 10,
        paddingEnd: 10,
        paddingRight: 10,
        margin: 5,
        borderWidth: 0.2,
        borderRadius: 20,
        elevation: 999,
        zIndex: 999
    }
})

export default Songs;