import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import Songs from './Songs/Songs';
import Setting from './Setting/Setting'
import Player from './Songs/Player';


// create tab navigation
const Tab = createBottomTabNavigator();

/** this is a home page that the user see after successfully logged in */
function Home() {

    // song name
    const [song, setSong] = useState(null);

    // get song from song list
    const getSong = (s) => {
        setSong(s);
    }

    return(
        // Remember to set independent props to true if we wanna use Nested NavigationContainer
        <NavigationContainer independent={true}>
            <Tab.Navigator
                // tab icons
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName = route.name === 'Songs'
                            ? 'md-home' : 'ios-settings'
                        
                        // return icon component
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                // active color
                tabBarOptions={{
                    activeTintColor: 'coral'
                }}>
                <Tab.Screen 
                    name="Songs"
                    children={() => <Songs handleOnPress={getSong}/>}
                    />
                <Tab.Screen name="Settings" component={Setting}/>
            </Tab.Navigator>
            <Player song={song}/>
        </NavigationContainer>
    )
}

export default Home;