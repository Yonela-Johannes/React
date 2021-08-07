import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ChamberListItem from '../components/ChambersListItem';
import NewMessageButton from '../components/NewMessageButton';
import { View } from '../components/Themed';
import chatRooms from '../data/ChatRooms'

export default function ChamberScreen() {
  return (
    <View style={styles.container}>
    <FlatList style={{width: '100'}}
     data={chatRooms}
    renderItem={({ item }) => <ChamberListItem chamberRoom={item} /> }
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
