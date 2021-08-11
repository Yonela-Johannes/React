import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const NewReactButton = () => {
    
    const onPress = () => (
        console.warn('open new react')
    )

    
    return(
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPress}>
            <MaterialCommunityIcons name="webhook" size={30} color="#49274b" />
            {/* <Image source={require('../../assets/images/reactSigma.png')} /> */}

        </TouchableOpacity>
    )
}

export default NewReactButton;