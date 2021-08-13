import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { SimpleLineIcons, AntDesign, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ListItem, Avatar} from 'react-native-elements';
// import { db } from "..firebase";


const CustomListItemRooms = ( {id, chatName, enterchat, navigation}) => {
    const [input, setInput] = useState('');

    // const createRoom = async () => {
    //     await db
    //     .collection('chats')
    //     .add({
    //         chatName: input,
    //     })
    //     .catch((error) => alert(error));
    // };

    const createRoom = () => {
        alert("Room created bro")
    }
 
    return (
        <ListItem style={{width: '100%'}}>
            <Avatar
            rounded
            source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}} />

            <ListItem.Content>
                <ListItem.Title style={{fontWeight: '600'}}>
                    React Creator
                </ListItem.Title>
                <ListItem.Subtitle numberOflines={1} ellipsizeMode="tail" >
                    Do you have a question ?
                </ListItem.Subtitle>
            </ListItem.Content>
            <TouchableOpacity activeOpacity={0.9} style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: 150, padding: 10}}>
                <SimpleLineIcons name="pencil" size={12} color="grey" />
                <Input value={input} onChangeText={(text) => setInput(text)}
                // onSubmitEditing={createChat}
                style={{outlineWidth: 0, fontSize: '13px', alignTextAlign: "center", justifyContent: "center", bottomBorder: "none", width: "20%"}} placeholder='Add local room' type="input"                
                />
                <Ionicons onPress={createRoom}  name="send" color="#c2cad4" size={20} />
        </TouchableOpacity>
        </ListItem>   
    )
}

export default CustomListItemRooms;
