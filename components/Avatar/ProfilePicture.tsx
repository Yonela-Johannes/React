import React from 'react';
import { Avatar } from 'react-native-elements';
import { Text, TouchableOpacity, View } from 'react-native'

const ProfilePicture = () =>{
    return (
        <View>
            <TouchableOpacity>
                    <Avatar
                    rounded
                    source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}} />
            </TouchableOpacity>
            <Text style={{color: 'grey', padding: '5px'}}>@Prince Niello</Text>
        </View>
    )
}

export default ProfilePicture;