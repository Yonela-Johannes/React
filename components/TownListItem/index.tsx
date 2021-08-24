import  React from 'react';
import styles from './style';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { TownRoom } from "../../types";
import { useNavigation } from '@react-navigation/native';

export type TownListItemProps = {
    name : TownRoom;
}
const TownListItem = (props: TownListItemProps) => {
    const { name } = props;

     const onClick = () => { 
        // Navigate to chat room with this townroom  
        }
    

    return (
        <TouchableWithoutFeedback onPress={onClick} style={{cursor: 'pointer'}}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                        <Text style={styles.town}>{name.name}</Text>
                    </View>
            </View> 
        </TouchableWithoutFeedback>
    ) 
};

export default TownListItem;