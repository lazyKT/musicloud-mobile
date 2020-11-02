import React, { useState } from 'react';
import { Modal } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import songContext from '../../Contexts/songContext';
import Setting from './Setting/Setting'
import Player from './Songs/Player';
import CustomTabBar from '../SubComponents/CustomTabBar';
import SongsMenu from './Songs/SongsMenu';
import PlayingScrn from './Songs/PlayingScrn';


// create tab navigation
const Tab = createMaterialTopTabNavigator();

/** this is a home page that the user see after successfully logged in */
function Home() {

    // song name
    const [songs, setSongs] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const onPlayerPress = _ => {
        console.log("Player Press");
        setShowModal(true);
    }

    const hideModal = _ => {
        console.log("Cancel ZClk");
        setShowModal(false);
    }

    return(
        <songContext.Provider value={{songs, setSongs}}>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    tabBar={(props, idx) => <CustomTabBar {...props} key={idx}/>}
                >
                    <Tab.Screen name="Songs" component={SongsMenu}/>
                    <Tab.Screen name="Settings" component={Setting}/>
                </Tab.Navigator>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}>
                    <PlayingScrn cancelClk={hideModal}/>
                </Modal>

                <Player onPress={onPlayerPress}/>

            </NavigationContainer>
        </songContext.Provider>
    )
}

export default Home;