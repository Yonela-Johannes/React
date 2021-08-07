import React, { useState } from 'react';
import { View } from 'react-native';
import { Button , Input, Image } from 'react-native-elements';
import {  KeyboardAvoidingView  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { logo } from '../assets/images/reactLogo.png';
import styles from './styles';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }

    return (    
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image source={{uri: "logo" }} style={{ width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
                autoFocus type={email} value='email' 
                onChangeText={(text) => setEmail(text)} 
                />
                <Input 
                placeholder="Password" 
                secureTextEntry
                type="password" value={password} 
                onChangeText={(text) => setPassword(text)} 
                />
                <View style={{height: 100}} ></View>
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type="outline" title="Register" />
        </KeyboardAvoidingView>      
    )
}

export default LoginScreen;