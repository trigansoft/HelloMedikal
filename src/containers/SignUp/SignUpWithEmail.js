/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput
} from 'react-native';
import {
    TextField,
} from '@ubaids/react-native-material-textfield';
import styles from "./styles"
import { Images } from '@constants';

export default function SignUpWithEmail(props) {
    const [email, setEmail] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.register}>Register Your Account</Text>
                <View style={styles.borderView} />
                <Text style={styles.account}>Create New Account via Email</Text>
            </View>
            <View style={styles.emptyContent} />
            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Email Address</Text>
                <View style={styles.textInputView}>


                    <TextInput
                        style={styles.textInput}
                        keyboardType="email-address"
                        returnKeyType="done"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Image source={Images.email} style={styles.icon} />
                </View>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>Confirmation code to be sent on your email</Text>
            </View>


        </View>
    )

}