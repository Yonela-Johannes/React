import React, { useState } from 'react';
import { Text, Input } from 'react-native-elements';
import {  KeyboardAvoidingView, View  } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [roomsName, setRoomsName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    const register = () => {

    }
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.registerContainer} >
            <StatusBar style="light" />
            <Text style={{marginBottom: 50}}>
                Create a React.Sigma acount
            </Text>
            <View style={styles.registerInputContainer}>
                <Input 
                placeholder="Full Name" 
                autofocus type='text'
                value={name}
                onChangeText={(text) => setName(text)}
                />
                <Input 
                placeholder="Rooms Name (Optional)" type='text'
                value={roomsName}
                onChangeText={(text) => setRoomsName(text)}
                />
                <Input 
                placeholder="Email" type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <Input 
                placeholder="Password" type='password'
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
                <Input 
                placeholder="Profile Picture Link (optional)" type='text'
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}
                />
            </View>
        </KeyboardAvoidingView >
    )
}

export default RegisterScreen;