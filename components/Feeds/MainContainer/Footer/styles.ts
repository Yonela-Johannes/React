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
    },
    iconContainer: {
        borderLeftWidth: .5,
        color: 'grey',
    }
});

export default styles;