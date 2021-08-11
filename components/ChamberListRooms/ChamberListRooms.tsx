import React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { TownRoom } from "../../types"

export type TownListItemProps ={
    townRoom: TownRoom;
}

const ChamberListRooms = (props: TownListItemProps) => {
    const { townRoom } = props;
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            {/* User Chat room list */}
            <Text>{townRoom.name}</Text>
            <Text>Here above it should be shown</Text>
            </View>
        </View>
        
    )
}

export default ChamberListRooms;