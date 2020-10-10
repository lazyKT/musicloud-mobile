import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Songs from './Songs/Songs';
import Setting from './Setting/Setting'
import Player from './Songs/Player';
import CustomTabBar from '../SubComponents/CustomTabBar';
import CustomHeader from '../SubComponents/CustomHeader';


// create tab navigation
const Tab = createMaterialTopTabNavigator();

/** this is a home page that the user see after successfully logged in */
function Home() {

    // song name
    const [song, setSong] = useState(null);

    // get song from song list
    const getSong = (s) => {
        setSong(s);
    }

    // return(
    //     // Remember to set independent props to true if we wanna use Nested NavigationContainer
    //     <NavigationContainer independent={true}>
    //         <Tab.Navigator
    //             tabBarOptions={{
    //               activeTintColor: '#e91e63',
    //               labelStyle: { fontSize: 12 },
    //             }}
    //             // screenOptions={}
    //         >
    //             <Tab.Screen 
    //                 name="Songs"
    //                 children={() => <Songs handleOnPress={getSong}/>}
    //                 options={{ 
    //                     headerTitle: props => <CustomHeader {...props}/>
    //                 }}
    //             />
    //             <Tab.Screen 
    //                 name="Settings" 
    //                 component={Setting}
    //                 options={{ headerTitle: props => <CustomHeader {...props} /> }}
    //             />
    //         </Tab.Navigator>
    //         <Player song={song}/>
    //     </NavigationContainer>
    // )
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                tabBar={props => <CustomTabBar {...props}/>}
            >
                <Tab.Screen 
                    name="Home" 
                    children={() => <Songs handleOnPress={getSong}/>}
                />
                <Tab.Screen name="Settings" component={Setting}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Home;