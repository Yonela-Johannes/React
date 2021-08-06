import React, { useState } from "react";
import styles from './styles';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons';

const onMicriphonePress = () => {
    
    
    console.warn("You Pressed Microphone")
}

    const onSendPress = () => {
        // Send Message to Backend
        
        setMessage("")
    }

    const InputBox = () => {
        const onPress = () => {
            if(!message){
                
            }else{
                
            }
        }
    const [ message, setMessage ] = useState("");
    
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="black" />
                <TextInput style={styles.textInput}
                multiline
                onChangeText={text => setMessage(text)}
                value={message}
                placeholder={'Type a message'}
                />
                <Entypo name="attachment" size="24" color="#fff" style={styles.icon} />
                {!message && <Fontisto name="camera" size="24" color="#fff"  style={styles.icon}/>}
                </View>
                <TouchableOpacity onPress={onPress}>
                        <View style={styles.buttonContainer}>
                            {!message ?
                                <MaterialCommunityIcons name="microphone" size={"28"} color="white" />
                                :
                                <MaterialCommunityIcons name="send-outline" size={"28"} color="white" /> 
                            }
                        </View>
                </TouchableOpacity>
        </View>
    );
}

export default InputBox;