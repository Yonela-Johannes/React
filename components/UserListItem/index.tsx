import  React from 'react';
import styles from './style';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from "../../types";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export type UserListItemProps = {
    user : User;
}
const UserListItem = (props: UserListItemProps) => {
    const { user } = props;

     const onClick = () => { 
        // Navigate to chat room with this user  
        }
    

    return (
        <TouchableWithoutFeedback onPress={onClick} style={{cursor: 'pointer'}}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />           
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                <Text numberOfLines={2}              
                  style={styles.status}>{user.occupation}</Text>
                </View>
                <Ionicons name="md-person-add-outline" size={24} color="black" />
            <Text style={{justifyContent: 'flex-end'}}>{user.rank}</Text>
            </View>           
        </View>
        </TouchableWithoutFeedback>
    ) 
};

export default UserListItem;