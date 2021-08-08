import { Avatar} from 'react-native-elements';
import { Input } from 'react-native-elements';
import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './style'
const Header = () => {
    return(
        <View style={styles.searchContainer}>
            <Avatar 
            rounded
            source={{
                uri: ""
            }}
            />
            <View style={styles.lastContainer}>
                <Ionicons name="search-outline" size={24} color="black" />
                <Input 
                placeholder="Search Town/Kasi" 
                type="text"
                style={{ 
                    width: "80%",
                    outlineWidth: 0
                }}
                />
                <MaterialIcons name="rate-review" size={24} color="black" />
            </View>
        </View>
    )
}

export default Header;