import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { Images } from '@constants';
export default function Input(props) {
    const { placeholder, onChangeText, value, keyboardType, image, secureTextEntry, returnKeyType, pointerEvents, onSecure, editable } = props;
    return (
        <View style={styles.inputContainer}>
            <View style={{ flex: 0.9 }}>
                <TextInput
                    style={{ paddingLeft: 10, fontSize: 15 }}
                    placeholder={placeholder}
                    placeholderTextColor="#8E8E8E"
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    returnKeyType={returnKeyType}
                    pointerEvents={pointerEvents}
                    editable={editable}
                />
            </View>
            <View style={{ flex: 0.1 }}>
                {placeholder === "Password" ? (
                    <TouchableOpacity onPress={onSecure}>
                        <Image source={image} style={styles.icon} />
                    </TouchableOpacity>
                ) : (
                        <Image source={image} style={styles.icon} />
                    )}

            </View>
        </View>
    )
}
