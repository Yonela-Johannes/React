import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FeedType } from '../../types';
import LeftContainer from './LeftContainer/index';
import MainContainer from "./MainContainer/index";


export type FeedTypeProps = {
    feed: FeedType,
}

const Feeds = ({ feed } : FeedTypeProps) => {
    return (
        <View style={styles.container}>
            <LeftContainer user={feed.user} />
            <MainContainer  feed={feed}/>
        </View>
    )
}

export default Feeds;