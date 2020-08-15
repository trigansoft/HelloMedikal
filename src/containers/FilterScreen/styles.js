import { StyleSheet, Dimensions } from "react-native";
import { Colors } from '@constants'
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        color: Colors.theme,
        fontSize: 23
    },
    filter: {
        backgroundColor: Colors.white,
        height: 35,
        width: 100,
        flexDirection: 'row',
        borderRadius: 17.5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.theme
    },
    filterText: {
        color: "#8E8E8E",
        fontSize: 15
    },
    inputView: {
        height: 50,
        // width: "100%",
        borderWidth: 1,
        borderColor: "#8E8E8E",
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
        // marginHorizontal: 10
    },
    input: { paddingRight: 10, fontSize: 15 },
    searchButton: {
        backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 45,
        width: width / 1.9,

    },
    searchText: {
        fontSize: 20,
        color: "white"
    },
    resetButton: {
        backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 45,
        width: width / 2.7,

    },
    resetText: {
        fontSize: 16,
        color: "white"
    },
    advance: {
        // backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 45,
        width: "100%",
        borderColor: Colors.theme,
        borderWidth: 1,
        marginTop: 20

    },
    advanceText: {
        fontSize: 20,
        color: Colors.theme,
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
})
export default styles;