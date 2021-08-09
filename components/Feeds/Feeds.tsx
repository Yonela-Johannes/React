import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { FeedType } from '../../types'

export type FeedTypeProps = {
    tweet: FeedType,
}

const Feeds = () => {
    return (
        <View>
            <Text> They listening to Music in the kitchen now</Text>
        </View>
    )
}

export default Feeds;