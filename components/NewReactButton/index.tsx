import React from 'react';
import {TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const NewReactButton = () => {
    
    const onPress = () => (
        console.warn('open new react')
    )

    
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <MaterialCommunityIcons name="webhook" size={30} color="black" />
        </TouchableOpacity>
    )
}

export default NewReactButton;