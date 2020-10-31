/**
 * This component is for the playing song screen,
 * where users can find audio controls and song info
 */
import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import songContext from '../../../Contexts/songContext';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


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
                    style={{ height: 300, width: 300}}
                />

                {/** Song Info Div */}
                <Text style={styles.songTitle}>
                    { songs ? songs.current : "No Song" }
                </Text>
                <Text>
                    Artist
                </Text>

                {/** Player Controls */}
                <View style={styles.player}>
                    <View style={styles.controls}>
                        <Ionicons name="md-shuffle" size={25} color="black" style={styles.shuffle}/>
                        <Ionicons name="md-skip-backward" size={40} color="black" style={styles.skip}/>
                        <AntDesign name="playcircleo" size={60} color="black" style={styles.play}/>
                        <Ionicons name="md-skip-forward" size={40} color="black" style={styles.skip}/>
                        <Ionicons name="md-repeat" size={25} color="black" style={styles.shuffle}/>
                    </View>
                </View>
            

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
    player: {
        height: 80,
        padding: 10,
        marginTop: 10
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