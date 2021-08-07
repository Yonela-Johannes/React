import  React from 'react';
import styles from './style';
import { Text, 
    View, 
    Image, 
    TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from "../../types";
import { useNavigation } from '@react-navigation/native';


export type ChatListItemProps = {
    chatRoom : ChatRoom;
}
const Avatar = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('ChatRoom', {
        id: chatRoom.id,
        name: user.name,
        })
    }
    const user = chatRoom.users[1];
    return (
        <TouchableWithoutFeedback onPress={onClick} style={{cursor: 'pointer'}}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />            
                <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    ) 
};

export default Avatar;