import React, { useState, useLayoutEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { db } from "../../firebase";

const CustomListItemRooms = ( {id, chatName, enterchat, navigation}) => {
    const [input, setInput] = useState('');
    const createRoom = async () => {
        console.log("Collection created bro")
        await db.collection('rooms')
        .add({
            chatName: input,
        })
        .catch((error) => alert(error));
    };
        useLayoutEffect(() => {
            
        })
 
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity  style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: 150, padding: 10}}>
                <SimpleLineIcons name="pencil" size={12} color="grey" />
                <Input value={input} onChangeText={(text) => setInput(text)}
                onSubmitEditing={createRoom}
                style={{outlineWidth: 0, fontSize: '13px', alignTextAlign: "center", justifyContent: "center", bottomBorder: "none", width: "20%"}} placeholder='Add local room' type="input"                
                />
                <AntDesign name="addusergroup" size={24} color="#c2cad4" />              
        </TouchableOpacity>
        </View>   
    )
}

export default CustomListItemRooms;
