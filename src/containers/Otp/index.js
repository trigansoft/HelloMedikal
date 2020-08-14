import React, { useState } from 'react'
import { View, Text, Keyboard, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import styles from './styles'
import { Images } from '@constants';


export default function Otp(props) {
    const { navigation } = props;
    const [code, setCode] = useState("");
    const [value, setValue] = useState(props.route.params.value);
    // console.log(props.route.params.value)
    function onSubmit() {
        if (!code) {
            alert("Please enter OTP")
        } else {
            navigation.push("RegisterForm", {
                value, selectedIndex: props.route.params.selectedIndex
            })
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={{ height: 64, justifyContent: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Image source={Images.back} style={{ marginLeft: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={{ flex: 0.05 }} />
                    <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                        <Text style={styles.headerText}>Enter the Code</Text>
                        <Text style={styles.text}>sent to {value}</Text>
                        <View style={{ marginHorizontal: 60 }}>
                            <OTPInputView
                                autoFocusOnLoad
                                style={{ width: "100%", height: 100 }}
                                pinCount={4}
                                onCodeChanged={(code) => {
                                    setCode(code);
                                }}
                                code={code}
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled={(code) => {
                                    Keyboard.dismiss()
                                    // setCode(code);
                                }}
                            />
                        </View>
                        <Text style={styles.resend}>Resend Code</Text>
                    </View>
                    <View style={{ flex: 0.55 }} />
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }} >
                        <TouchableOpacity onPress={onSubmit}>
                            <Image source={Images.done} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
