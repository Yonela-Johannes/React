import React from 'react'
import { ListItem, Avatar} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function RoomsHead( {id, chatName }) {
    const navigation = useNavigation();

    const enterRoom = (id, chatRoom) => {
        navigation.navigate('createdChatRoom', {
          id: id,
          chatName: chatName,
        })
      }

    return (
        <ListItem key={id} onPress={() => enterRoom(id, chatName)} bottomDivider style={{width: '100%'}}>
            <Avatar
            rounded
            source={{uri: "https://alexusrenee.com/wp-content/uploads/sites/8/2018/09/6LACK.png"}} />

            <ListItem.Content>
                <ListItem.Title style={{fontWeight: '600'}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" >
                    ABC?          
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>        
    )
}

export default RoomsHead