import React, { useState } from 'react';
import { Text, View,Button} from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';


const MessageSender = () => {
    const [ post, setPost ] = useState();

    const feedTyping = () => {
    
    }
    const handleSubmit = e => {
        e.preventDefault();
    }


    return (
        <View style={styles.container}>
            <View style={styles.messagesender}>
                <MaterialIcons name="face" size={24} color="black" />
                <View style={styles.form}>
                    <Input name="post" placeholder="Anything on your mind ?..." />
                    <Input placeholder="Any image LINK (Optional)"/>                    
                </View>
            </View>
                <Button title="Post State" onPress={handleSubmit}/>
            <Text> I am here</Text>
        </View>
    )
}

export default MessageSender;