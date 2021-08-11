import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { FeedType } from '../../../types'
import { Entypo } from '@expo/vector-icons';
import Footer from './Footer/index';
import moment from 'moment';

export type MainContainerTypeProps = {
    feed: FeedType,
}

const MainContainer = ( { feed }: MainContainerTypeProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.feedHeaderContainer}>
                <View style={styles.feedHeaderNames}>
                    <Text style={styles.name}>@{feed.user.name}_</Text>
                    <Text style={styles.username}>{feed.user.username}</Text>
                </View>
                <Text style={styles.time}>{moment(feed.createdAt).fromNow()}</Text>
                <Entypo style={styles.moreIcon} name="chevron-down" size={20} color="#49274b" />
            </View>
            <View style={styles.content}>
                <Text style={styles.feed}>{feed.content}</Text>
                {!!feed.image && <Image style={styles.image} source={{uri: feed.image}} />}
                <Footer feed={feed}/>
            </View>


        </View>
    )
}

export default MainContainer;