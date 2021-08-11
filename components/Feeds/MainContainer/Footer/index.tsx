import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FeedType } from '../../../../types';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons, Ionicons, FontAwesome5  } from '@expo/vector-icons';

export type FooterTypeProps = {
    feed: FeedType,
}

const Footer = ({ feed } : FooterTypeProps) => {
    return (

        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="webhook" size={27} color="#49274b" />
                {/* <Text style={styles.number}>{feed.numberOfReacts}</Text> */}
            </View>
            <View style={styles.iconContainer}>
                <MaterialIcons name="dynamic-feed" size={27} color="#49274b" />
                {/* <Text style={styles.number}>{feed.numberOfFeeds}</Text> */}
            </View>
            <View style={styles.iconContainer}>
                <FontAwesome name="comments-o" size={27} color="#49274b" />
                {/* <Text style={styles.number}>{feed.numberofComments}</Text> */}
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name="heart-circle-sharp" size={27} color="#49274b" />
                {/* <Text style={styles.number}>{feed.numberOfLoves}</Text> */}
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name="heart-dislike-circle-outline" size={27} color="#49274b" />
                {/* <Text style={styles.number}>{feed.numberOfUnLoves}</Text> */}
            </View>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="laugh-beam" size={27} color="#49274b" />
                {/* <Text style={styles.number}>{feed.numberOfLikes}</Text> */}
            </View>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="angry" size={27} color="#49274b" />
                {/* <Text style={styles.number}>{feed.numberOfUnlikes}</Text> */}
            </View>
        </View>
    )
}

export default Footer;