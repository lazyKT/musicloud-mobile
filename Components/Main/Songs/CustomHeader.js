/**
 * Header for Songs Component
 * Header includes search-bar and title of the Play List
 */
import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ title, onSearchClk }) => {


    return(
        <View style={styles.header}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
            >
                { title }
            </Text>
            <Pressable
                onPress={onSearchClk}
                style={styles.flex_icon_box}
            >
                <Ionicons name="md-search" size={22} color="black" />
            </Pressable>
        </View>
    )

}


const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'coral'
    },
    flex_icon_box : {
        backgroundColor: 'gainsboro',
        width: 35,
        height: 35,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default CustomHeader;