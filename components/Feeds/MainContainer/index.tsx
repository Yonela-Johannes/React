import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { FeedType } from '../../../types'
import { Entypo } from '@expo/vector-icons';

export type MainContainerTypeProps = {
    feed: FeedType,
}

const MainContainer = ( { feed }: MainContainerTypeProps) => {
    return (
        <View>
            <View style={styles.feedHeaderContainer}>
                <Entypo style={styles.moreIcon} name="chevron-down" size={24} color="black" />
                <View style={styles.feedHeader}>
                <Text style={styles.name}>@{feed.user.name}_</Text>
                <Text style={styles.username}>{feed.user.username}</Text>
                <Text style={styles.time}>15s</Text>
                </View>
                {!!feed.image && <Image style={styles.image} source={{uri: feed.image}} />}
            </View>
            <View>
                <Text style={styles.feed}>{feed.content}</Text>
            </View>
            {/* Username  */}

            {/*  Content */}
            {/* Feed */}
        </View>
    )
}

export default MainContainer;