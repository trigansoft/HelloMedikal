import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Logo, MeterialTextInput } from '@components'
import { Strings, Images } from '@constants'
import styles from './styles';



export default function SignIn(props) {
    let { please_login_your_account, enter_your_info_account } = Strings;

    useEffect(() => {

    }, []);
    const loginNow = () => {

    }
    const signUp = () => {

    }
    return (
        <View style={styles.container}>

            <View style={styles.logoView}>
                <Logo />
            </View>

            <View style={styles.loginTextView}>
                <Text style={styles.loginText}>{please_login_your_account}</Text>
                <Text style={styles.infoAccount} numberOfLines={2}>{enter_your_info_account}</Text>
            </View>

            <View style={{ flex: 0.05 }}></View>

            <View style={{ flex: 0.25 }}>
                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
                    <MeterialTextInput
                        label="Email Address"
                        keyboardType="default"
                    // renderLeftAccessory={() => {
                    //     return (
                    //         <Image source={Images.email} style={{ height: 20, width: 20, marginRight: 5, tintColor: "grey" }} />
                    //     )
                    // }}
                    />
                    <MeterialTextInput
                        label="Password"
                        keyboardType="default"
                        secureTextEntry={true}

                        renderRightAccessory={() => {
                            return (<View style={styles.forgotView}>

                                <Text style={styles.forgot}>Forgot?</Text>
                            </View>
                            )
                        }
                        }
                    // renderLeftAccessory={() => {
                    //     return (
                    //         <Image source={Images.lock} style={{ height: 20, width: 20, marginRight: 5 }} />
                    //     )
                    // }}
                    />
                </View>
            </View>

            <View style={styles.bottomRow}>
                <View style={styles.noAccountView}>
                    <Text style={styles.noAccountText}>No account?</Text>
                    <TouchableOpacity onPress={() => { signUp() }}>
                        <Text style={styles.signUpText}>Signup</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.loginNowButton}>
                    <TouchableOpacity onPress={() => { loginNow() }} style={styles.loginNowButton}>
                        <Text style={styles.loginNowText}>Login Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

