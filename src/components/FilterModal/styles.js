import { StyleSheet, Dimensions } from "react-native";
import { Colors } from '@constants'
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContent: {
        backgroundColor: Colors.theme,
        marginHorizontal: 20, borderRadius: 5
    },
    closeIcon: {
        height: 20,
        width: 20,
        tintColor: Colors.white
    },
    modalHeader: {
        fontSize: 23,
        color: Colors.white
    },
    modalInput: {
        height: 50,
        // width: "100%",
        borderWidth: 1,
        borderColor: "#8E8E8E",
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 10
    },
    dist: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10
    },
    applyButton: {
        height: 50,
        // width: "100%",
        borderWidth: 2,
        borderColor: Colors.white,
        // borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20
    },
    applyText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 20
    },
    track: {
        height: 6,
        // borderRadius: 5,
        // backgroundColor: '#d0d0d0',
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.theme
    },
})
export default styles;