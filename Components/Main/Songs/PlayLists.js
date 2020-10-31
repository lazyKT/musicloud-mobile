import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../SubComponents/CustomButton';


function PlayLists({ navigation }) {

    const handleOnClick = title => {
        // passing route params with navigation
        navigation.navigate("AllSongs", { title });
    }

    return(
        <View style={styles.container}>
            <Text>PlayLists</Text>

            <CustomButton
                title="All Songs"
                type= "playlist"
                handleOnClick={() => handleOnClick("All Songs")}
                />

            <CustomButton
                title="PlayList-1"
                type= "playlist"
                handleOnClick={() => handleOnClick("Playlist 1")}
                />
            
            <CustomButton
                title="PlayList-2"
                type= "playlist"
                handleOnClick={() => handleOnClick("Playlist 2")}
                />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});


export default PlayLists;