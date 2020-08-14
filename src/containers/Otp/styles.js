import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@constants';
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    underlineStyleBase: {
        width: width / 8,
        // width: width / 9,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: "#707070",
        color: "black",
        fontSize: 26,
        // fontFamily: fonts.Medium
    },

    underlineStyleHighLighted: {
        borderColor: Colors.theme,
    },
    headerText: {
        textAlign: 'center',
        color: Colors.black,
        fontSize: 25
    },
    text: {
        textAlign: 'center',
        color: Colors.black,
        marginTop: 5,
        fontSize: 14
    },
    resend: {
        textAlign: 'center',
        color: Colors.theme,
        fontSize: 14
    }
})
export default styles
