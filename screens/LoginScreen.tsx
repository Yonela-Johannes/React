import React, { useState } from 'react';
import { View } from 'react-native';
import { Button , Input, Image } from 'react-native-elements';
import {  KeyboardAvoidingView, ImageBackground  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import BG from '../assets/images/SigmaLogo.png';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {

    }
    return (
        <ImageBackground style={{width:'100%', height: '100%'}} source={BG}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <StatusBar style="light" />
                <Image source={{uri: "https://media.pitchfork.com/photos/5ef110478813ffa92664e42a/16:9/w_2512,h_1413,c_limit/6LACK.jpg" }} style={{ width: 200, height: 200}}
                />
                <View style={styles.inputContainer}>
                    <Input 
                    placeholder="Email" 
                    autoFocus style={{ outlineWidth: 0 }} type={email} value={email}
                    onChangeText={(text) => setEmail(text)} 
                    />
                    <Input 
                    placeholder="Password" style={{outlineWidth: 0}}
                    secureTextEntry
                    type="password" value={password} 
                    onChangeText={(text) => setPassword(text)} 
                    />
                    <View style={{height: 100}} ></View>
                </View>
                <Button onPress={() => navigation.navigate("MainApp")}  containerStyle={styles.button} title="Login" />
                <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default LoginScreen;