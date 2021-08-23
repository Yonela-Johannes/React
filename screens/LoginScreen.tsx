import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Button , Input, Image } from 'react-native-elements';
import {  KeyboardAvoidingView, ImageBackground  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import BG from '../assets/images/SigmaLogo.png';
import { auth } from '../firebase';


const LoginScreen = ({ navigation }) => {
    const [username, setUsername ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('MainApp')
            }
        });

        return unsubscribe;
    }, [])


    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error))
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
                    placeholder="Your Email" 
                    autoFocus style={{ outlineWidth: 0 }} type={email} value={email}
                    onChangeText={(text) => setEmail(text)} 
                    />
                    <Input 
                    placeholder="Username" 
                    autoFocus style={{ outlineWidth: 0 }} value={username}
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