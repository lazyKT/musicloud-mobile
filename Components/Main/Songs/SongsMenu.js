/** Songs Menu */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PlayLists from './PlayLists';
import Songs from './Songs';


const Stack = createStackNavigator();

function SongsMenu() {

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="PlayLists" component={PlayLists}/>
                <Stack.Screen name="AllSongs" component={Songs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default SongsMenu;