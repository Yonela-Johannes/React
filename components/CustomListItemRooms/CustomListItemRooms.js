import React, { useState, useLayoutEffect } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { db } from "../../firebase";

const CustomListItemRooms = ({ id, chatName, enterchat }) => {
    const [input, setInput] = useState('');

    const createRoom = async () => {
        await db.collection('rooms')
        .add({
            chatName: input,
        })
        .catch((error) => alert(error));
    };
        useLayoutEffect(() => {
            
        })
 
    return (
        <View style={styles.container}>
            <View style={styles.main__container}>
                <TouchableOpacity  style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: 250}}>
                    <SimpleLineIcons name="pencil" size={12} color="grey" />
                    <Input value={input} onChangeText={(text) => setInput(text)}
                    onSubmitEditing={createRoom}
                    style={{outlineWidth: 0, fontSize: '13px', alignTextAlign: "center", justifyContent: "center", bottomBorder: "none", width: "20%"}} placeholder='Add local room' type="input"                
                    />
                    <AntDesign name="addusergroup" size={24} color="#c2cad4" />              
            </TouchableOpacity>
            </View>
        </View>   
    )
}

export default CustomListItemRooms;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    main__container: {
        backgrounColor: '#c2cad4',
    }
})