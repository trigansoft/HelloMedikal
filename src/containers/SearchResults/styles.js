import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@constants'
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    backIcon: {
        tintColor: Colors.theme
    },
    heading: {
        color: "#707070",
        fontSize: 16
    },
    headerText: {
        fontSize: 16,
        color: "#707070",
        // marginTop: 20,
        marginLeft: 10
    },
    header: {
        fontSize: 24,
        color: "black",
        marginLeft: 10,
        fontWeight: "bold"
    },
    flatlistStyle: {
        marginTop: 20,
        // marginLeft: 20
    },
    imageStyle: {
        height: 100,
        width: "100%",
        borderRadius: 5,
        // borderWidth: 2,
        borderColor: Colors.theme
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 5,
    },
    row: {
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: "lightgrey",
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        // elevation: 0.5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    name: { fontSize: 18, fontWeight: 'bold', color: 'black' },
    specialist: { fontSize: 15, color: '#c4c0c0', },
    location: {
        fontSize: 15, color: '#707070',
        marginTop: 10
    },
    hospital: { fontSize: 15, color: '#707070', marginTop: 5 },
    heart: { height: 20, width: 20, tintColor: Colors.theme },
    rating: {
        fontSize: 18,
        color: "#707070",
        marginRight: 10
    },
    starIcon: {
        tintColor: "#EBA937",
        height: 15,
        width: 15
    }
})
export default styles;