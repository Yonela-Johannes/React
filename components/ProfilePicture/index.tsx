// import React from 'react';
// import { Image } from 'react-native';

// export type ProfilePictureProps = {
//     image: string,
//     size?: number,
// }

// const ProfilePicture = ({image, size = 50}: ProfilePictureProps) => {
//     <Image 
//     source={{uri: image}} 
//     style={{ width: size, 
//         height: size, 
//         borderRadius: size}} 
//     />
// }

// export default ProfilePicture;


import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native'
export type ProfilePictureProps = {
    image: string,
    size?: number,
}

const ProfilePicture = ({}: ProfilePictureProps) => (
    <View>
        <Image 
        source={require('../../assets/images/dp.jpg')} 
        style={{ width: 50, 
            height: 50, 
            borderRadius: 50}} 
        />
    </View>
)

export default ProfilePicture;