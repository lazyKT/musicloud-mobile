import React, { useEffect, useContext, useReducer, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../SubComponents/Input';
import CustomButton from '../SubComponents/CustomButton';
import userContext from '../../Contexts/userContext';



const init = {
    username: "",
    email: "",
    password: "",
    c_pwd: "",
    usr_error: null,
    email_error: null,
    pwd_error: null,
    cPwd_error: null
};


function reducer(state, action) {

    switch (action.type) {
        case 'setUsername' : 
            return { ...state, username : action.username };
        
        case 'setEmail' :
            return { ...state, email: action.email };

        case 'setPassword' :
            return { ...state, password: action.password };

        case 'setCPwd' :
            return { ...state, c_pwd: action.c_pwd };

        case 'usernameLength' : 
            return { ...state, usr_error: "Username must have at least three charactors!" };

        case 'usernameSpecialCase' : 
            return { ...state, usr_error: "Invalid charactor(s) in username!" };

        case 'emailError' :
            return { ...state, email_error: "Invalid Email Format! "};
        
        case 'pwdNotMatch' :
            return { ...state, cPwd_error: "Password does not match!"};

        case 'passwordError' :
            return { ...state, pwd_error: "Password should have at least 8 charactors, 1 Uppercase and 1 number!"};

        case 'clearError' :
            return { ...state, [action.field]: null };

        default :
            throw new Error('Registration Error!');
    }
}


function Register({ navigation }) {


    const { setSignedIn } = useContext(userContext);

    // registeration data
    const [ state, dispatch ] = useReducer(reducer, init);
    const [ regiserOK, setRegisterOK ] = useState(false);

    const { username, email, password, c_pwd } = state;
    const { usr_error, email_error, pwd_error, cPwd_error } = state;


    // input change
    const handleInputOnChange = (key, value) => {
        if (key === "username") 
            dispatch({ type: "setUsername", username: value });
        else if (key === "email")
            dispatch({ type: "setEmail", email: value });
        else if ( key === "password" )
            dispatch({ type: "setPassword", password: value });
        else if ( key === "c_pwd" )
            dispatch({ type: "setCPwd", c_pwd: value });
    }


    // validate users credentials
    const validateCredentials = ( username, email, password, c_pwd ) => {

        let usr_rgx = /^(?=.*[a-zA-Z])([a-zA-Z0-9]){4,10}$/;
        let email_rgx = /(\S|\s)+@\S+\.\S+/;
        let pwd_rgx =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/;

        // username validation
        if (!usr_rgx.test(username)) {

            if (!username)
                dispatch({ type: "usernameLength" });
            // check if username contain special case
            else if (! /^(?=.*[a-zA-Z0-9])$/.test(username))
                dispatch({ type: "usernameSpecialCase" });
            else
                dispatch({ type: "usernameLength" });
        } else 
            dispatch({ type: "clearError", field: "usr_error" });
            
        // email validation
        if (! email_rgx.test(email))    
            dispatch({ type: "emailError" });
        else 
            dispatch({ type: "clearError", field: "email_error" });

        // password validation
        if (! pwd_rgx.test(password))
            dispatch({ type: "passwordError" });
        else
            dispatch({ type: "clearError", field: "pwd_error" });
        
        // confirm password validation
        if ( password !== c_pwd)
            dispatch({ type: "pwdNotMatch" });
        else 
            dispatch({ type: "clearError", field: "cPwd_error" });
    }



    // onClick Register Button
    const onClickRegister = _ => {
        console.log("Register Clicked!")

        // validating registeration credentials 
        validateCredentials(username, email, password, c_pwd);

        console.log(usr_error, email_error, pwd_error, cPwd_error);

        // validation pass
        if ( !usr_error && !email_error && !pwd_error && !cPwd_error ) {
            console.log("Register OK");
            setRegisterOK(true);
        } else {
            setRegisterOK(false);
        }

    }


    // useEffect(() => {
    //     console.log("REGISTER");
    // });

    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>
                    Register
                </Text>

                <Text style={styles.msg}>
                    { regiserOK && 
                        "Register OK! Please verify your email!"
                    }
                </Text>

                {/* Username */}
                <Input
                    error={usr_error}
                    title="Username"
                    name="username"
                    value={username}
                    inputOnChange={handleInputOnChange}
                    />

                {/* Email Address */}
                <Input
                    error={email_error}
                    title="Email Address"
                    name="email"
                    value={email}
                    inputOnChange={handleInputOnChange}
                    />

                {/* Password */}
                <Input
                    error={pwd_error}
                    title="Password"
                    name="password"
                    value={password}
                    inputOnChange={handleInputOnChange}
                    />
                
                {/* Re-enter Password */}
                <Input
                    error={cPwd_error}
                    title="Confirm Password"
                    name="c_pwd"
                    value={c_pwd}
                    inputOnChange={handleInputOnChange}
                    />
                
                {/* Registe Button */}
                <CustomButton 
                    title="Register" 
                    type="login"
                    handleOnClick={onClickRegister}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',  
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
        color: 'green'
    },
    error: {
        color: 'red'
    }
})


export default Register;