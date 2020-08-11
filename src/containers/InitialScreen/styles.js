import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get("window")
import { Colors } from '@constants';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        color: Colors.black,
        fontSize: 35
    },
    signInButton: {
        height: 55,
        width: 160,
        backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    signUpButton: {
        height: 55,
        width: 160,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.theme,
        marginLeft: 20
    },
    signIn: {
        color: Colors.white,
        fontSize: 22,
        letterSpacing: 0.5,
        fontWeight: "500"
    },
    signUp: {
        color: Colors.theme,
        fontSize: 22,
        letterSpacing: 0.5,
        fontWeight: "500"
    },
    guest: {
        fontSize: 22,
        color: Colors.black,
        // textDecorationLine: "underline",    
        // textDecorationStyle: "solid",
        // textDecorationColor: "black",
        textAlign: 'center'
        // letterSpacing: 2
    }
});
export default styles