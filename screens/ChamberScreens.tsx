import * as React from "react";
import { View } from "react-native";
import ChamberHeader from "../components/ChambersListItem/ChamberHeader";
import ChamberListRooms  from "../components/ChamberListRooms/ChamberListRooms";


export default function ChamberScreen(){
    return (
        <View>
          <ChamberHeader />
          <ChamberListRooms />
        </View> 
    );
}

