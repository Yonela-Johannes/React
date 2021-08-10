import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button , Input, Image } from 'react-native-elements';
import {  KeyboardAvoidingView, ImageBackground  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import BG from '../assets/images/SigmaLogo.png';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername ] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (e) => {
        e.preventDefault();

        if(username !== 'Prince Niello'){
            alert("You have entered a wrong username");
        }else if(password !== "123456" && username === "Prince Niello"){
            alert("You have entered wrong password");
        }
        else
        {
            console.log("Logged In bro")
            navigation.navigate('MainApp')            
        }
    }
    return (
        <ImageBackground style={{width:'100%', height: '100%'}} source={BG}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <StatusBar style="light" />
                <Text style={{
                    paddingBottom: '15px',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: "#49274b"
                }}>Stay connected with everyone!</Text>
                <Image source={require("../assets/images/reactBackground.png")} style={{ width: 200, height: 200}}
                />
                <View style={styles.inputContainer}>
                    <Input 
                    placeholder="What do you call yourself ?" 
                    autoFocus style={{ outlineWidth: 0 }} type={username} value={username}
                    onChangeText={(text) => setUsername(text)} 
                    />
                    <Input 
                    placeholder="Password" style={{outlineWidth: 0}}
                    secureTextEntry
                    type="password" value={password} 
                    onChangeText={(text) => setPassword(text)} 
                    />
                    <View style={{height: 100}} ></View>
                </View>
                <Button onPress={signIn}  containerStyle={styles.button} title="Login" />
                {/* <Button onPress={() => navigation.navigate("MainApp")}  containerStyle={styles.button} title="Login" /> */}
                <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default LoginScreen;