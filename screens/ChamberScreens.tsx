import { Chat } from "@material-ui/icons";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "../components/Avatar/style";
import ChambersListItem from '../components/ChambersListItem'
import ChamberHeader from "../components/ChambersListItem/ChamberHeader"

export default function ChamberScreen(){
    return (
        <View style={styles.container}>
          <ChamberHeader />
          {/* <ChambersListItem chamberRoom={{lastMessage: {content: 'Hello There'}}} /> */}
        </View> 
    );
}

