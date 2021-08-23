import React, { useState, useLayoutEffect } from 'react';
import { Button, Text, Input} from 'react-native-elements';
import {  KeyboardAvoidingView, View, ImageBackground } from 'react-native';
import styles from './styles';
import SelectTown from "../components/ChamberSelect/SelectTown"
import { StatusBar } from 'expo-status-bar';
// import BG from '../assets/images/sigmaLogo.png';
import { auth } from "../firebase"

const RegisterScreen = ({ navigation }) => {



    const [name, setName] = useState('');
    const [chatName, setChatName] = useState('');
    const [town, setTown] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState('');
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Back To Login",
        });
    }, [navigation]);

    const register = () => {
        //  console.log("Nigga you clicked me dude")
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    DisplayName: name,
                    ChatName: chatName,
                    photoURL:
                        imageUrl || "https://www.pngfind.com/pngs/m/381-3819326_default-avatar-svg-png-icon-free-download-avatar.png",

                });
            })
            .catch((error) => alert(error.message));
    };

    return(
        // <ImageBackground style={{width:'100%', height: '100%'}} source={BG}>
        <KeyboardAvoidingView behavior="padding" style={styles.registerContainer} >
            <StatusBar style="light" />
            <Text style={{marginBottom: 30,
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: '#49274b',
            }}>
                Welcome to React
            </Text>
            <Text style={styles.error__message}>This is an error message!</Text>
            <View style={styles.registerInputContainer}>
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Name" 
                autofocus type='text'
                value={name}
                onChangeText={(text) => setName(text)}
                />
                <Input style={{ outlineWidth: 0 }} 
                placeholder="What should we call you ?" type='text'
                value={chatName}
                onChangeText={(text) => setChatName(text)}
                />
                <SelectTown />
                <Input style={{ outlineWidth: 0 }} 
                placeholder="Where you from?" type='text'
                value={town}
                onChangeText={(text) => setTown(text)}
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
                placeholder="Display Picture Link (Optional)" type='text'
                value={picture}
                onChangeText={(text) => setPicture(text)}
                />
            </View>
            <Button containerStyle={styles.button}
            raised 
            onPress={register} 
            title="Enter Chat" />
            <View style={{ height: 100}} />
            <View>
            </View>
        </KeyboardAvoidingView >
    // </ImageBackground>
    )
}

export default RegisterScreen;