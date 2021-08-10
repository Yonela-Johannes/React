import React, { useState, useLayoutEffect } from 'react';
import { Button, Text, Input } from 'react-native-elements';
import {  KeyboardAvoidingView, View, ImageBackground } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import BG from '../assets/images/sigmaLogo.png';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [roomsName, setRoomsName] = useState('');
    const [town, setTown] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back To Login",
        });
    }, [navigation]);
    const register = () => {
         console.log("Nigga you clicked me dude")

    };

    return(
        <ImageBackground style={{width:'100%', height: '100%'}} source={BG}>
        <KeyboardAvoidingView behavior="padding" style={styles.registerContainer} >
            <StatusBar style="light" />
            <Text style={{marginBottom: 30,
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: '#49274b',
            }}>
                Welcome to React
            </Text>
            <View style={styles.registerInputContainer}>
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Name" 
                autofocus type='text'
                value={name}
                onChangeText={(text) => setName(text)}
                />
                <Input style={{ outlineWidth: 0 }} 
                placeholder="What name should we call you ?" type='text'
                value={roomsName}
                onChangeText={(text) => setRoomsName(text)}
                />
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Where you from?" type='text'
                value={town}
                onChangeText={(text) => setRoomsName(text)}
                />
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Email" type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Password" type='password'
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Button containerStyle={styles.button}
            raised 
            onPress={register} 
            title="Register" />
            <View style={{ height: 100}} />
        </KeyboardAvoidingView >
    </ImageBackground>
    )
}

export default RegisterScreen;