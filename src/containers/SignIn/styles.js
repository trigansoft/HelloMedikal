import { StyleSheet } from 'react-native';
import { Colors } from '@constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start'
        // alignContent:'center'
    },
    logoView: { flex: 0.2 },
    loginTextView: { flex: 0.1, justifyContent: 'space-evenly', alignContent: 'center', alignItems: 'center' },
    loginText: { fontSize: 23, fontStyle: 'italic', color: Colors.skyBlue, fontWeight: 'bold' },
    infoAccount: { fontSize: 18, color: Colors.gray, textAlign: 'center' },
    noAccountView: { flex: 0.6, height: 35, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    noAccountText: { fontSize: 16, fontWeight: '400', color: Colors.gray, textAlign: 'left' },
    signUpText: { fontSize: 16, paddingLeft: 10, fontWeight: '600', color: Colors.skyBlue, textAlign: 'right' },
    loginNowButton: { height: 35, width: 130, backgroundColor: Colors.skyBlue, borderWidth: 1, borderColor: Colors.skyBlue, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
    loginNowText: { fontSize: 16, fontStyle: 'normal', textAlign: 'center', color: Colors.white, fontWeight: 'bold' },
    bottomRow: { flex: 0.4, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginHorizontal: 18 },
    forgot: {
        color: Colors.theme,
        fontWeight: "600"
    },
    forgotView: {
        borderLeftWidth: 1,
        borderColor: 'grey',
        paddingLeft: 10
    }
})

export default styles;