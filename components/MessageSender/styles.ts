import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 30,
        flexDirection: 'column',
        BackgroundColor: 'blue',
        BorderRadius: "15px",
        width: "100%",
    },
    messagesender: {
        padding: "15px",
        borderBottom: "1px solid white"
    },
    form: {
        alignItems: "center",
        textAlign: "center",
        width: '90%',
        margin: "0 auto",
        padding: '10px'
    }
});

export default styles;