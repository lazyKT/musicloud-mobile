import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../SubComponents/Input";
import CustomButton from "../SubComponents/CustomButton";
import userContext from "../../Contexts/userContext";

/** Login Component */
function Login({ navigation }) {

    // context for auth flow
    const { signedIn, setSignedIn } = useContext(userContext);

  // login data
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // validate input: username
  const [usrError, setUsrError] = useState(false);
  // validate input: password
  const [pwdError, setPwdError] = useState(false);

  // destructuring data
  const { username, password } = data;

  // handling onChange Event of Input
  const handleInputOnChange = (key, value) => {
    // console.log(key, value);
    setData({
      ...data,
      [key]: value,
    });
    // console.log('data onChange', data);
  };

  // handling onPress Event of CustomButtons
  // login
  const handleLogin = () => {
    // check for empty text input
    if (!username || !password) {
      username ? setUsrError(false) : setUsrError(true);
      password ? setPwdError(false) : setPwdError(true);

      return;
    }

    console.log("data", data);
    setSignedIn(true);
  };
  // register
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {/* Title */}
        <Text style={styles.title}>Welcome to MusiCloud</Text>

        {/* Username or Email Input */}
        <Input
          error={usrError}
          title="Username or Email"
          name="username"
          value={username}
          inputOnChange={handleInputOnChange}
        />

        {/* Password Input */}
        <Input
          error={pwdError}
          title="Password"
          name="password"
          value={password}
          inputOnChange={handleInputOnChange}
        />

        {/* Login Button */}
        <CustomButton title="Login" type="login" handleOnClick={handleLogin} />
        <CustomButton
          title="Register"
          type="register"
          handleOnClick={handleRegister}
        />
      </View>
    </View>
  );
}

/** styling Login Component */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    width: 300,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Login;
