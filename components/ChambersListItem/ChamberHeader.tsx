import React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import ProfilePicture from '../Avatar/ProfilePicture';

const ChamberHeader = function(){
    return (
        <View style={styles.container}>
            <ProfilePicture />
            <View style={styles.mainContainer}>
            <Text>Wolseley</Text>           
            </View>
            <View style={styles.midContainer}>

            </View>
        </View>
    )
}

export default ChamberHeader;