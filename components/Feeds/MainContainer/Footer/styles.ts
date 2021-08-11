import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 5,
    },
    number: {
        color: "#ba9cc9",
        marginLeft: 5,
        justifyContent: 'center',
        cursor: 'pointer'
    },
    iconContainer: {
        color: '#ba9cc9',
        alignItems: 'center',
        flexDirection: 'row',
        cursor: 'pointer'
    }
});

export default styles;