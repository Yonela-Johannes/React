import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import feed from "../data/feed"
import Feeds from '../components/Feeds/Feeds'
import MessageSender from '../components/MessageSender/MessageSender'
const HomeScreen = () => {
    return(
        <View>
            <Feeds feed={feed[0]} /> 
            <MessageSender />
        </View>
    )
}

export default HomeScreen;