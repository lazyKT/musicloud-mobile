/** Player Controls button in Playing Screen */
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



function PlayerControls() {

    
    return (
        <View style={styles.container}>
            <View style={styles.controlsContainer}>
                <Pressable style={styles.playercontrol}>
                    <Ionicons name="md-shuffle" size={25} color="black" style={styles.shuffle}/>
                </Pressable>

                <Pressable style={styles.playercontrol}>
                    <Ionicons name="md-skip-backward" size={40} color="black" style={styles.skip}/>
                </Pressable>

                <Pressable style={styles.playercontrol}>
                    <AntDesign name="playcircleo" size={60} color="black" style={styles.play}/>
                </Pressable>

                <Pressable style={styles.playercontrol}>
                    <Ionicons name="md-skip-forward" size={40} color="black" style={styles.skip}/>  
                </Pressable>

                <Pressable style={styles.playercontrol}>
                    <Ionicons name="md-repeat" size={25} color="black" style={styles.shuffle}/>
                </Pressable>
            </View>
        </View>
    )
}



// stylings
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 350,
        padding: 10
    },
    controlsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    playercontrol: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PlayerControls;
