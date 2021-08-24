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
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    town: {
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default styles;