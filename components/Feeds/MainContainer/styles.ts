import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    feedHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        color: "#49274b"
        
    },
    feedHeaderNames: {
         flexDirection: 'row',

     },
    name: {
        marginHorizontal: 5,
    },
    username: {
        marginHorizontal: 5,
        fontWeight: "bold",
        color: '#49274b',
        fontSize: '1.2em',
    },
    time: {
        marginHorizontal: 5,
        color: "grey",
        
    },
    image: {
        marginTop: 20,
        marginHorizontal: 5,
        width: "400px",
        height: "200px",
        resizeMode: "object-fit",
        borderRadius: 15,
        overflow: 'hidden',
        padding: 5

    },
    feed: {
        marginTop: "10px",
        paddingHorizontal: 5,
        lineHeight: "20px",
    },
    moreIcon: {
        justifyContent: "center",
        alignSelf: 'center'
    },
    content: {
        lineHeight: 20,
    }
});

export default styles;