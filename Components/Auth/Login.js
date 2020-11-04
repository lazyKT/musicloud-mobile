import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import Input from "../SubComponents/Input";
import CustomButton from "../SubComponents/CustomButton";
import userContext from "../../Contexts/userContext";
import { loginRequest } from "../NetworkRequests/users_requests";

/** Login Component */
function Login({ navigation }) {

    // context for auth flow
  const { setSignedIn } = useContext(userContext);

  // login data
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [ loginTxt, setLoginTxt ] = useState("Login");
  // login response message
  const [ msg, setMsg ] = useState(null);

  // validate input: username
  const [usrError, setUsrError] = useState(null);
  // validate input: password
  const [pwdError, setPwdError] = useState(null);

  // destructuring data
  const { username, password } = data;


  // store auth tokens in async storage
  const storeData = async (value) => {
    try {
      const jsonData = JSON.stringify(value);
      await AsyncStorage.setItem('@authToken', jsonData);
    } catch (error) {
      console.log("error", error);
    }
  }

  
  // handling onChange Event of Input
  const handleInputOnChange = (key, value) => {
  
    setData({
      ...data,
      [key]: value,
    });
  };


  // handling onPress Event of CustomButtons
  // login
  const handleLogin = async () => {
    // check for empty text input
    if (!username || !password) {
      username ? setUsrError(null) : setUsrError("Username must not be blank!");
      password ? setPwdError(null) : setPwdError("Password must not be blank!");

      return;
    }

    try {
      const request = await loginRequest(data);

      setLoginTxt("Loading ...");

      if (request.status === 200) {
        
        setLoginTxt("Login");
        setMsg(null);

        storeData(request.data);
        setSignedIn(true);

      } else {
        setMsg("Username (or) password is incorrect!");
        setLoginTxt("Login");
      }
      
    } catch(e) {
      console.log('e', error);
    }
  };


  // register
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  /* rendering */
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {/* Title */}
        <Text style={styles.title}>Welcome to MusiCloud</Text>

        {/* Login Response Message */}
        <Text style={styles.msg}>{ msg && msg }</Text>

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
        <CustomButton 
          title={loginTxt}
          type="login" 
          handleOnClick={handleLogin} 
        />
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
  msg: {
    color: 'red'
  }
});

export default Login;
