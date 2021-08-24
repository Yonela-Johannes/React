import React from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native';
import town from '../../data/town';
import TownListItem from '../../components/TownListItem'

const SelectChamber = () => {

    return (
        
        <View style={styles.container}>
            
            <FlatList 
                style={{width: '100%', display: 'none'}}
                data={town}
                renderItem={({ item }) => 
                
                <TownListItem name={item} />}
                keyExtractor={(item) => item.key}
            >
            </FlatList>
            </View>
    )
}

export default SelectChamber;


const styles = StyleSheet.create({
    container: {

    }
})