import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, Settings } from 'react-native';
import userContext from '../../Contexts/userContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Songs from './Songs/Songs';
import Setting from './Setting/Setting'

// create tab navigation
const Tab = createBottomTabNavigator();

/** this is a home page that the user see after successfully logged in */
function Home() {

    // auth flow context
    const { signedIn, setSignedIn } = useContext(userContext);

    // handle signout
    const handleSignOut = () => {
        setSignedIn(false);
    }

    return(
        // Remember to set independent props to true if we wanna use Nested NavigationContainer
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Songs" component={Songs}/>
                <Tab.Screen name="Settings" component={Setting}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Home;