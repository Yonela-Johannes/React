import  React from 'react';
import styles from './style';
import { Text, 
    View, 
    Image, 
    TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from "../../types";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';


export type ChatListItemProps = {
    chatRoom : ChatRoom;
}
const ChatListItem = (props: ChatListItemProps) => {
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
                <Text numberOfLines={1}
                 ellipsizeMode={"tail"}
                  style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).subtract(6, 'days').calendar()}</Text>
        </View>
        </TouchableWithoutFeedback>
    ) 
};

export default ChatListItem;