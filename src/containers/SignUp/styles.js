import { StyleSheet } from 'react-native';
import { Colors } from '@constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tabsContainerStyle: { height: 55, backgroundColor: '#F2F2F2', borderRadius: 30 },
    tabStyle: { backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent', },
    activeTabStyle: { backgroundColor: Colors.theme, marginTop: 2, borderRadius: 30 },
    tabTextStyle: { color: Colors.theme, fontSize: 20, },
    activeTabTextStyle: { color: Colors.white, fontSize: 20 },
    register: {
        color: Colors.theme,
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 10
    },
    borderView: {

        borderWidth: 1.2,
        borderColor: "grey",
        margin: 10
    },
    account: {
        marginHorizontal: 10,
        fontSize: 14,
        color: "#3D3D3B"
    },
    button: {
        height: 55,
        width: "100%",

        backgroundColor: Colors.theme,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: Colors.white,
        fontSize: 20
    },
    placeholder: {
        color: "#3D3D3B",
        fontSize: 14,
        fontWeight: 'bold'
    },
    input: {
        height: 35,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        margin: 0,
        padding: 0
    },
    text: {
        color: "#3D3D3B",
        fontSize: 14,
        // marginTop: 5,
        fontWeight: '600'
    },
    bottomText: {
        color: "#3D3D3B",
        fontSize: 14,
        textAlign: 'center'
    },
    logoView: { flex: 0.2, },
    inputView: { flex: 0.3 },
    emptyView: { flex: 0.1, },
    buttonView: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: 'lightblue'
    },
    bottomView: {
        flex: 0.1,
        flexDirection: 'row',
        paddingHorizontal: 10

    },
    topView: { flex: 0.1, marginHorizontal: 20, justifyContent: 'center' },
    iconView: { flex: 0.1, justifyContent: 'center', alignItems: 'center' },
    bottomTextView: { flex: 0.9, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    view: { flex: 0.33, justifyContent: 'center' },
    emptyContent: { flex: 0.27, },
    inputContainer: {
        flex: 0.3,
        marginHorizontal: 10,
        justifyContent: 'flex-end',
        // backgroundColor: 'yellow'
    },
    textInputView: {
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey',
        alignItems: 'center'
    },
    textInput: {
        // backgroundColor: 'pink',
        width: "90%",
        height: 40,
        marginLeft: 10,
        margin: 0,
        padding: 0
    },
    numberInput: {
        // backgroundColor: 'pink',
        width: "75%",
        height: 40,
        marginLeft: 10,
        margin: 0,
        padding: 0
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: "grey",
        // alignSelf: 'flex-end'
    },
    textView: {
        flex: 0.13,
        marginHorizontal: 10,
        //  backgroundColor: 'pink',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        backgroundColor: 'white'
    },
    modalView: {
        marginTop: 30,
        marginHorizontal: 20
    },
    headerModal: {
        color: "#717171",
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },
    modalSubText: {
        color: "#717171",
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        letterSpacing: 1,
        lineHeight: 20,

    },
    modalText: {
        color: "#717171",
        fontSize: 14,
        marginTop: 20,
        letterSpacing: 1,
        lineHeight: 20,
    },
    lock: { height: 20, width: 20, tintColor: "grey" }
})

export default styles;