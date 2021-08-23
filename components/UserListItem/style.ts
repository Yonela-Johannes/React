import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 10,
        overflow: 'hidden',
    },
    midContainer: {
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginLeft: 30,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#49274b',
        marginLeft: 30,
    },
    status: {
        marginLeft: 30,
    }
});

export default styles;