import  React, { useState }from "react";
import { View } from "react-native";
import ChamberHeader from "../components/ChambersListItem/ChamberHeader";
import Kasi from './Kasi';
import CustomListItem from "../components/CustomList/CustomListItem"
export default function ChamberScreen(){

    return (
      <View>
        <CustomListItem />        
          <ChamberHeader />
          <Kasi />
      </View> 
    );
}

