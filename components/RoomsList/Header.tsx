import { Avatar} from 'react-native-elements';
import { Input } from 'react-native-elements';
import React,{ useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './style'
import CustomListItem from "../CustomList/CustomListItem"


const Header = ({ navigation }) => {



    return(
        <View style={styles.searchContainer}>
            <CustomListItem />
            <View style={styles.lastContainer}>
                <Ionicons name="search-outline" size={24} color="black" />
                <Input placeholder="Search Town/Kasi" type="text" style={{ width: "80%", outlineWidth: 0}} />

            </View>
        </View>
    )
}

export default Header;