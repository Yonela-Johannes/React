import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {View, Text, } from 'react-native';
import ChamberListRooms from './ChamberListRooms';
import {Input} from 'react-native-elements'
import { Avatar } from '@material-ui/core';
import styles from './Styles';
const Chambers = () => {
    return (
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, backgroundColor: '#551955'}}>
                <MaterialIcons name='avatar' size={24} color="black" />
                <MaterialIcons name='access-time' size={24} color="white" />
                <Ionicons name="search-outline" size={24} color="black" />
                {/* Input */}
                <Input style={{outlineWidth: 0 }} placeholder="Search Your Towns" type="text" />
            <ChamberListRooms />
        </View>
    )
}

export default Chambers;