import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',        
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
      },
    registerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '',
    },
    registerInputContainer: {
         width: 330,
    },

    // container: {
    //     flex: 1,
    // },
    receiver: {
        padding : 15,
        backgroundColor: "#a9c0cc",
        alignSelf: 'flex-end',
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: '80%',
        position: 'relative',
    },
    sender: {
        padding: 15,
        backgroundColor: '#41748d',
        alignSelf: 'flex-start',
        borderRadius: 20,
        maxWidth: '80%',
        position: 'relative',
    },
    senderText: {
        color: 'white',
        fontWeight: 500,
        marginLeft: 10,
        marginBottom: 10
    },
    senderName: {
        left: 10,
        paddingRight: 10,
        fontSize: 12,
        color: "#49274b"
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,

    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: 'transparent',
        backgroundColor: "#c2cad4",
        borderWidth: 1,
        padding: 10,
        color: "gray",
        borderRadius: 30,
        outlineWidth: 0

    }
});

export default styles;