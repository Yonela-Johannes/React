import React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';


const ChamberListRooms = () => {
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <MaterialIcons name="expand-more" size={24} color="#000" />
                <Text>Chambers</Text>
            </View>
            <View style={styles.midContainer}>
                    {/* <Chambers /> */}
                    <Text>Wolseley</Text>
                    <Text>Ceres</Text>
                    <Text>Tulbagh</Text>
                    <Text>Gouda</Text>
            </View>
        </View>
        
    )
}

export default ChamberListRooms;