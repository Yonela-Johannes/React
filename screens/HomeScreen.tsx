import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import feed from "../data/feed"
import Feeds from '../components/Feeds/Feeds'
import PageFeeds from '../components/Feed/index'

import MessageSender from '../components/MessageSender/MessageSender'
const HomeScreen = () => {
    return(
        <View>
            <PageFeeds /> 
        </View>
    )
}

export default HomeScreen;