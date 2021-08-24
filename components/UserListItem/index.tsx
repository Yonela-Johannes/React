import  React from 'react';
import styles from './style';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from "../../types";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export type UserListItemProps = {
    user : User;
}
const UserListItem = (props: UserListItemProps) => {
    const { user } = props;


    return (
        <TouchableWithoutFeedback >
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                 <Fontisto style={{marginRight: 10, padding: 10}} name="radio-btn-active" size={12} color="black" />
                    <Text style={{justifyContent: 'flex-end'}}>{user.rank}</Text>
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />           
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text numberOfLines={2}              
                  style={styles.occupation}>{user.occupation}</Text>
            </View>

            <View style={styles.rating}>
                {
                    Array(user.rating)
                    .fill()
                    .map((_) => (
                        <Text numberOfLines={1}
                        ellipsizeMode={"tail"}>⭐️</Text>
                    ))
                }
            </View>
                <Text style={{marginRight: 10}}>{user.rating}</Text>
                <Ionicons name="md-person-add-outline" size={16} color="black" />
        </View>
        </TouchableWithoutFeedback>
    ) 
};

export default UserListItem;