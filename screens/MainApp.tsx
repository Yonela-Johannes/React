
import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import MainTabNavigator from '../navigation/MainTabNavigator'

const MainApp = ({ navigation }) => {
    return(
        <View style={styles.container}>
             <MainTabNavigator/>
        </View>
    )
}
export default MainApp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})