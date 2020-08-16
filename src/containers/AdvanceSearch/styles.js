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
        height: 18,
        width: 18,
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
        backgroundColor: 'white',
        marginTop: 20
        // marginHorizontal: 10
    },
    input: { paddingRight: 10, fontSize: 15 },
    applyFilterButton: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 5,
        height: 45,
        width: width / 2.29,
        borderColor: Colors.theme,
        borderWidth: 1
    },
    applyFilterText: {
        fontSize: 16,
        color: Colors.theme,
    },
    resetButton: {
        backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: width / 2.29,

    },
    resetText: {
        fontSize: 16,
        color: "white"
    },
    searchNow: {
        backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 57,
        width: "100%",
        borderColor: Colors.theme,
        borderWidth: 1,
        marginTop: 30

    },
    searchNowText: {
        fontSize: 16,
        color: Colors.white,
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
    text: {
        fontSize: 16,
        color: "#8E8E8E",
        marginLeft: 10
    },
    checkIcon: {
        height: 18,
        width: 18,
        tintColor: "#8E8E8E",
    }
})
export default styles;