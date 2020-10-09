import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import userContext from "./Contexts/userContext";
import Home from "./Components/Main/Home";

/** navigation container */
const Stack = createStackNavigator();

export default function App() {
  /** to determine if the user has signed in or not */
  const [signedIn, setSignedIn] = useState(false);

  /** Effects on user signed-in state */
  useEffect(() => {}, [signedIn]);

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
});
