import { StyleSheet, Dimensions } from 'react-native'

const {height} = Dimensions.get('screen')
const heigh_logo = height + 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#49274b"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: heigh_logo,
        heigh: heigh_logo
    },
    tite: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        color: "grey",
        marginTop: 5,

    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection:'row'
    },
    textsign: {
        color: "#fff",
        fontWeight: 'bold'
    }   

})

export default styles;