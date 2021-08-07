import React, { useState } from 'react';
import { Button, Text, Input } from 'react-native-elements';
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
            <Text h3 style={{marginBottom: 50}}>
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
            <Button containerStyle={styles.button}
            raised 
            onPress={register} 
            title="Register" />
            <View style={{ height: 100}} />
        </KeyboardAvoidingView >
    )
}

export default RegisterScreen;