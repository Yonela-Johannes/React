import React from 'react';
import { View, Text } from 'react-native';
// import styles from './styles';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture/index';

export type LeftContainerTypeProps = {
    user: UserType,
}

const LeftContainer = ( { user }: LeftContainerTypeProps) => {
    return (
        <View>
            <ProfilePicture size={40} style={{width: 40, height: 40, borderRadius: 50}}/>
        </View>
    )
}

export default LeftContainer;