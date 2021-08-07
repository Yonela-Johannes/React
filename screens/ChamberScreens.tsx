import * as React from "react";
import { View } from "react-native";
import ChamberHeader from "../components/ChambersListItem/ChamberHeader";
import Chambers from "../components/ChamberListRooms/Chambers";

export default function ChamberScreen(){
    return (
        <View>
          <ChamberHeader />
          <Chambers />
        </View> 
    );
}

