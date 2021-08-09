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
    const [imageUrl, setImageUrl] = useState('');

    
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
            <Text h3 style={{marginBottom: 50}}>
                Create a React.Sigma acount
            </Text>
            <View style={styles.registerInputContainer}>
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Full Name" 
                autofocus type='text'
                value={name}
                onChangeText={(text) => setName(text)}
                />
                <Input style={{ outlineWidth: 0 }} 
                placeholder="psuedonym e.g. King/Kween ? (Optional)" type='text'
                value={roomsName}
                onChangeText={(text) => setRoomsName(text)}
                />
                <Input style={{ outlineWidth: 0 }} 
                placeholder=" Where you from?" type='text'
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
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Profile Picture Link (optional)" type='text'
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}
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