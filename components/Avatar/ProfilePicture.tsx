import React from 'react';
import { Text, Avatar, ListItem } from 'react-native-elements';
import { View } from 'react-native'

const ProfilePicture = () =>{
    return (
        <ListItem>
            <Avatar 
            rounded
            source={{
                uri: ""
            }}
            />
            <Text>Niello</Text>
        </ListItem>
    )
}

export default ProfilePicture;