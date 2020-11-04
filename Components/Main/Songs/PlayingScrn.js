/**
 * This component is for the playing song screen,
 * where users can find audio controls and song info
 */
import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import songContext from '../../../Contexts/songContext';

import PlayerControls from './PlayerControls';


function PlayingScrn({ cancelClk }) {

    const { songs } = useContext(songContext);

    return(
        <SafeAreaView style={styles.safeView}>
            <Pressable onPress={cancelClk}>
                <Text>Back</Text>
            </Pressable>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2020/06/08/20/22/human-5276040_1280.jpg',
                      }}
                    style={{ height: 300, width: 350}}
                />

                {/** Song Info Div */}
                <Text style={styles.songTitle}>
                    { (songs && songs.current) ? songs.current.title : "-- --" }
                </Text>
                <Text>
                    { songs && songs.current && "user" }
                </Text>

                {/** Player Controls */}
                <PlayerControls/>
            

            </View>
        </SafeAreaView>
    )
}


// stylings
const styles = StyleSheet.create({
    safeView: {
        height: "100%",
        padding: 10,
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        justifyContent: "center",
    },
    songTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    songImg: {
        height: 300,
        width: 350,
        padding: 10
    },
    player: {
        height: 80,
        padding: 20,
        paddingLeft: 20,
        marginTop: 10,
        backgroundColor: 'red'
    },
    controls: {
        flex: 1,
        flexDirection: 'row'
    },
    shuffle: {
        width: "15%",
        marginTop: 20
    },
    skip: {
        width: "25%",
        marginTop: 10
    },
    play: {
        width: "35%",
    }
})


export default PlayingScrn;