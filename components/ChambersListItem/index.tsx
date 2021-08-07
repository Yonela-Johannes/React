import React from "react";
import { View, Text } from 'react-native';
import { ChamberRoom } from "../../types";
export type ChamberListItemProps = {
    chamberRoom: ChamberRoom;

}
export type ChatListItemProps = {
    chamberRoom: ChamberRoom;
}

const ChamberListItem = (props: ChamberListItemProps) => {
    const { chamberRoom } = props;
    return(
        <View>
            <Text>{chamberRoom.lastMessage.content}</Text>
        </View>
    )
}
export default ChamberListItem;