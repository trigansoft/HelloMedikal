import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text, TextInput
} from 'react-native';
import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';
import styles from "./styles"
import { Images } from '@constants';

export default function SignUpWithPhone(props) {
    const [country, setCountry] = useState({ "callingCode": ["1"], "cca2": "US", "currency": ["USD"], "flag": "flag-us", "name": "United States", "region": "Americas", "subregion": "North America" })
    const [phone, setPhone] = useState("")
    useEffect(() => {
        // getAllCountries().then((countries) => {
        //     const countryyy = countries.find((c) => (c.cca2 === countryCode));
        //     console.log('countryyy', countryyy);
        // });
    }, []);
    return (
        <View style={[styles.container, {}]}>
            <View style={styles.view}>
                <Text style={styles.register}>Register Your Account</Text>
                <View style={styles.borderView} />
                <Text style={styles.account}>Create New Account via Phone</Text>
            </View>
            <View style={styles.emptyContent} />
            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Phone Number</Text>
                <View style={styles.textInputView}>
                    <CountryPicker
                        withCallingCode={true}
                        withEmoji={true}
                        countryCode={country.cca2}
                        // visible={this.state.pickerVisible}
                        onSelect={country => {
                            console.log("country", country)
                            setCountry(country)
                        }}
                    />
                    <Text style={{}}>+ {country.callingCode[0]}</Text>
                    <TextInput
                        style={styles.numberInput}
                        keyboardType="number-pad"
                        returnKeyType="done"
                        onChangeText={(text) => { setPhone(text) }}
                        value={phone}
                        maxLength={10}
                        onEndEditing={() => {
                            props.getNumber("+" + country.callingCode[0] + "-" + phone)
                        }}
                        onSubmitEditing={() => {
                            props.getNumber("+" + country.callingCode[0] + "-" + phone)
                        }}
                    />
                    <Image source={Images.phone} style={styles.icon} />
                </View>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>Confirmation code to be sent on your mobile number</Text>
            </View>

        </View>
    )

}