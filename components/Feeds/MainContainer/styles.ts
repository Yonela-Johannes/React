import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: "center",
    },
    feedHeaderContainer: {
        flexDirection: 'row',
        // width: '100%',
        flex: 1,
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
        marginTop: 20,
        marginHorizontal: "10px",
        width: "400px",
        height: "200px",
        resizeMode: "cover",
        borderRadius: 15,
        overflow: 'hidden',
        padding: '20px'

    },
    feed: {
        marginTop: "20px",
        paddingHorizontal: "10px",
        width: "500px",
        lineHeight: "20px",
    },
    moreIcon: {
        alignSelf: 'flex-start',
        color: "grey",
    },
    content: {
        lineHeight: 18,

    }
});

export default styles;