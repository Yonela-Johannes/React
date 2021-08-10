import * as React from 'react';
import {View,FlatList, StyleSheet } from 'react-native';
import Header from '../components/RoomsList/Header';
import NewMessageButton from '../components/NewMessageButton';
import Rooms from '../data/Rooms'
import RoomListItem from '../components/RoomsList/index';

export default function RoomScreen() {
  return (
    <View style={styles.container}>
      <Header />
    <FlatList style={{width: '100%'}}
     data={Rooms}
    renderItem={({ item }) => <RoomListItem room={item} /> }
    keyExtractor={(item) => item.id}
    />
    <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});