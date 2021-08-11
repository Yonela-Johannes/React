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
        <select>
            <option value="Belville">Belville</option>
            <option value="Belville">Wolseley</option>
            <option selected value="Belville">Ceres</option>
        </select>
        </View>
    )
}

export default Chambers;