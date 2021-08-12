import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
// import { useNavigation } from '@react-navigation/native'

const NewReactButton = () => {
    // const navigation = useNavigation();


    // const onPress = () => (
    //     navigation.navigate('NewReact')
    // )

    
    return(
        <TouchableOpacity activeOpacity={0.9} style={styles.button}>
            <MaterialCommunityIcons name="webhook" size={30} color="#49274b" />
            {/* <Image source={require('../../assets/images/reactSigma.png')} /> */}

        </TouchableOpacity>
    )
}

export default NewReactButton;