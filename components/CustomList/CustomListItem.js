import React from 'react'
import { ListItem, Avatar} from 'react-native-elements';



const CustomListItem = ( {id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>          
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: '400'}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOflines={1} ellipsizeMode="tail" >
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem
