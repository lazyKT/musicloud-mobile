import React, { useState, useEffect } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import userContext from "./Contexts/userContext";
import Home from "./Components/Main/Home";
import { AppLoading } from "expo";

/** navigation container */
const Stack = createStackNavigator();

export default function App() {
  /** to determine if the user has signed in or not */
  const [signedIn, setSignedIn] = useState(false);
  /**
   * determining whether the app is read to load or not 
   * When the app loads up for the first time, 
   * it will search the necessary items in Async Storage.
   * The idea is to run the App Loading Screen until the app's setup is finished.
   * */
  const [ appReady, setAppReady ] = useState(false);


  /** checking authTokens from Async Storage */
  const readTokens = async () => {
    try {
      const tokens = await AsyncStorage.getItem('@authToken');
      console.log("Tokens", tokens);
      if (tokens) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
      //setAppReady(true);
    } catch(e) {
      console.log("Error", e);
      setSignedIn(false);
    }
  }

  // when the app is ready to load (aka) app's setup is finished
  if (appReady) {
    return (
      <userContext.Provider value={{ signedIn, setSignedIn }}>
        <NavigationContainer>
          <Stack.Navigator>
            {signedIn ? (
              <>
                {/* SignedIn: protected */}
                <Stack.Screen
                  name="home"
                  component={Home}
                  options={{
                    title: "Home",
                  }}
                />
              </>
            ) : (
              <>
                {/* SignedOut: public */}
                <Stack.Screen
                  name="login"
                  component={Login}
                  options={{
                    title: "Login",
                  }}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{
                    title: "MusiCloud",
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </userContext.Provider>
    )
  }
  // while app is loading its setup 
  else {
    return (
      <AppLoading
        startAsync={readTokens}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
});
