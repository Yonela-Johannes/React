import  React from 'react';
import styles from './style';
import { Text, 
    View, 
    Image, 
    TouchableWithoutFeedback } from 'react-native';
import { Room } from "../../types";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';


export type RoomListItemProps = {
    room : Room;
}
const RoomListItem = (props: RoomListItemProps) => {
    const { room } = props;

    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('Room', {
        id: room.id,
        name: user.name,
        })
    }
    const user = room.users[1];
    return (
        <TouchableWithoutFeedback onPress={onClick} style={{cursor: 'pointer'}}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />           
                <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text numberOfLines={2}
                 ellipsizeMode={"tail"}
                  style={styles.lastMessage}>{room.lastMessage.content}</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    ) 
};

export default RoomListItem;