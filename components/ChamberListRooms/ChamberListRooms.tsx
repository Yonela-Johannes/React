import React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';


const ChamberListRooms = () => {
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text>Chambers</Text>
                <MaterialIcons name="expand-more" size={24} color="#000" />
            </View>
            <View style={styles.midContainer}>
                <hr />
                {/* Connect to db and list all the channels */}
                
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