import React, { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {View, Text, } from 'react-native';
import ChamberListRooms from './ChamberListRooms';
import {Input} from 'react-native-elements'
import { Avatar } from '@material-ui/core';
import styles from './Styles';
import Town from './../../data/Chambers'

const Chambers = () => {

    return (        
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <ChamberListRooms townRoom={{name: "Woela Town here mybro"}}/>
        <select style={{width: 400, 
            padding: 10, 
            overflow: 'hidden',
            fontWeight: "bold",
            outlineWidth: 0,
            borderRadius: 15,
            backgroundColor: 'white',
            fontSize: '1.2em',
            color: '#49274b',
            borderWidth: 0,
            paddingHorizontal: 5,
            arrown: 'hidden',
            }}>
            <option value="Belville">Belville</option>
            <option value="Belville">Wolseley</option>
            <option selected value="Belville">Ceres</option>
        </select>
        </View>
    )
}

export default Chambers;