import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    feedHeaderContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    feedHeader: {
        flexDirection: 'row',
        width: '100%',

    },
    name: {
        marginHorizontal: "10px",
    },
    username: {
        marginHorizontal: "10px",
        fontWeight: "bold",
        color: '#49274b',
        fontSize: '1.2em',
    },
    time: {
        marginHorizontal: "10px",
        color: "grey",
        
    },
    image: {
        marginHorizontal: "10px",

    },
    feed: {
        fontWeight: "bold",
        margin: "10px",
        paddingHorizontal: "10px",
        width: "75%",
    },
    moreIcon: {
        alignSelf: 'flex-start',
        color: "grey",
    }
});

export default styles;