import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment"
import Input from "./Input"
import { Strings } from "@constants"
import styles from "./styles"
import { Images, Colors } from '@constants';

export default function RegisterForm(props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isSecure, setIsSecure] = useState(true);
    const [gender, setGender] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(props.route.params.selectedIndex)
    useEffect(() => {
        if (selectedIndex) {
            setPhone(props.route.params.value)
        } else {
            setEmail(props.route.params.value)
        }
    }, [])
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        setDob(date)
        hideDatePicker();
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Register Form</Text>
                <Text style={styles.text}>Please fill out the form below to get started</Text>
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    {Strings.gender.map((res, key) => {
                        return (
                            <TouchableOpacity key={key} style={[styles.row, {
                                marginLeft: key === 0 ? 0 : 20, marginRight: key === 1 ? 0 : 20
                            }]} onPress={() => setGender(res)}>
                                {gender.id === res.id ? (
                                    <Image source={res.selectedImage} />
                                ) : (
                                        <Image source={res.image} />
                                    )}

                                <Text style={[styles.title, { color: gender.id === res.id ? Colors.theme : "#8E8E8E" }]}>{res.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Input
                        placeholder="Email Address"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                        image={Images.email}
                        secureTextEntry={false}
                        editable={!selectedIndex ? false : true}

                    />
                    <Input
                        placeholder="Your Name"
                        onChangeText={(text) => setName(text)}
                        value={name}
                        keyboardType="default"
                        image={Images.profile}
                        secureTextEntry={false}
                        editable={true} />
                    <Input
                        placeholder="Phone Number"
                        onChangeText={(text) => setPhone(text)}
                        value={phone}
                        keyboardType="number-pad"
                        image={Images.call}
                        secureTextEntry={false}
                        editable={selectedIndex ? false : true}
                    />
                    <Input
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        keyboardType="default"
                        image={isSecure ? Images.hide : Images.eye}
                        secureTextEntry={isSecure}
                        editable={true}
                        onSecure={() => setIsSecure(!isSecure)} />
                    <TouchableOpacity onPress={showDatePicker}>
                        <Input
                            placeholder="Date of Birth"
                            // onChangeText={() => setDob(text)}
                            value={dob && moment(dob).format("DD-MM-YYYY")}
                            keyboardType="default"
                            image={Images.calendar}
                            secureTextEntry={false}
                            editable={true}
                            pointerEvents="none"
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <Image source={Images.check} style={styles.checkIcon} />
                        <Text style={styles.agree}>I agree with your</Text>
                        <Text style={styles.terms}>terms and conditions</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} >Create an Account</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center' }}>
                        <Text style={styles.agree}>Already have an Account?</Text>
                        <Text style={styles.signin}>Sign in</Text>
                    </View>
                </View>

            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}
