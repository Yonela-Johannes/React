import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import feed from "../data/feed"
import Feeds from '../components/Feeds/Feeds'
import BG from '../assets/images/sigmaLogo.png';


const HomeScreen = () => {
    return(
        <ImageBackground style={{width:'100%', height: '100%'}} source={BG}>
            <View>
                <Feeds feed={feed[0]}/> 
                <Text>Ndibonga Came Home Late</Text>
            </View>
        </ImageBackground>
    )
}

export default HomeScreen;