import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@constants';
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        color: Colors.theme,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30
    },
    text: {
        color: "#8E8E8E",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
    },
    row: {
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 14,
        color: "#8E8E8E",
        marginTop: 10
    },
    inputContainer: {
        height: 40,
        width: "100%",
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    icon: { height: 20, width: 20, tintColor: "#8E8E8E" },
    agree: {
        color: "#8E8E8E",
        fontSize: 14,
        marginLeft: 5
    },
    terms: {
        color: Colors.theme,
        fontSize: 14,
        marginLeft: 5,
        textDecorationLine: "underline"
    },
    checkIcon: {
        height: 18, width: 18, tintColor: "#8E8E8E"
    },
    button: {
        height: 35,
        width: "100%",
        backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    },
    signin: {
        color: Colors.theme,
        fontSize: 15,
        marginLeft: 5,
        textDecorationLine: "underline"
    },
})
export default styles
