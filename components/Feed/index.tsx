import { RepeatTwoTone } from '@material-ui/icons';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import feed from '../../data/feed'
import Feeds from '../Feeds/Feeds'

const PageFeeds = () => (
    <View style={{backgroundColor: 'red'}}>
        <FlatList
        data={feed} 
        renderItem={({item}) => <Feeds feed={item} />}
        KeyExtractor={(item) => item.id}    
        />
    </View>
)

export default PageFeeds;