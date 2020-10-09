/** Song Component */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';
import Profile from './Profile';


// create navigation stack
const Stack = createStackNavigator();


/** Setting Page */
function Setting() {

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Setting"
                    component={Main}
                    />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Setting;