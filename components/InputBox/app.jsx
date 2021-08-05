import { React, useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons';

const InputBox = () => {
    // const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="black" />
                <TextInput style={styles.textInput}
                multiline
                placeholder={'Type a message'}
                />
                <Entypo name="attachment" size="24" color="#fff" style={styles.icon} />
                <Fontisto name="camera" size="24" color="#fff"  style={styles.icon}/>
            </View>
                <View style={styles.buttonContainer}>
                    <MaterialCommunityIcons 
                    name="microphone" size="28" color="#fff" />
                </View>
        </View>
    )
}

export default InputBox;