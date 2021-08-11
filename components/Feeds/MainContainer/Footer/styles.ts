import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 20,
        backgroundColor: 'gray',
        borderRadius: 15,
        paddingVertical: 5,
    },
    number: {
        color: "grey",
        marginLeft: 5,
        justifyContent: 'center',
    },
    iconContainer: {
        color: '#49274b',
        alignSelf: 'center',
        flexDirection: 'row',
    }
});

export default styles;