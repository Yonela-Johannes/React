import { StyleSheet } from "react-native"
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
container: {
    padding: 10,
},
messageBox: {
    borderRadius: 5,
},
name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    padding: 2,
    marginLeft: 20,
},
message: {
    color: Colors.light.text,
    marginBottom: 15,
    marginLeft: 17,
    fontSize : 18,
    // marginVertical: 5,
},
time: {
    marginLeft: 10,
    color: Colors.light.tint,
    alignSelf: 'flex-start',
    color: 'gray',
}

});

export default styles;