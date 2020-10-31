/**
 * This component is for the playing song screen,
 * where users can find audio controls and song info
 */
import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import songContext from '../../../Contexts/songContext';


function PlayingScrn({ cancelClk }) {

    const { songs } = useContext(songContext);

    return(
        <SafeAreaView style={styles.safeView}>
            <Pressable onPress={cancelClk}>
                <Text>Back</Text>
            </Pressable>
            <View style={styles.container}>
                <Text>
                    { songs ? songs.current : "No Song" }
                </Text>
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
    }
})


export default PlayingScrn;