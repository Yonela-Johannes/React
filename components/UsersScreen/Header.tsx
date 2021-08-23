import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 18, color: '#542f5a', fontWeight: 'bold', paddingTop: 10}}>Search User to start chatting</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10}}>
                <MaterialCommunityIcons styles={{cursor: "pointer"}} name="account-search" size={22} color="#542f5a" />
                <Input style={styles.input} placeholder="enter username" />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column',
        padingTop: 20, 
        backgroundColor: '#e9e9e9'        
    },
    input: {
        fontSize: 13,
        textAlign: 'center',
        outlineWidth: 0

    }
});