import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import styles from './styles'
import { Colors } from '@constants';
export default function Input(props) {
    const { icon, placeholder, iconColor } = props;
    return (
        <View style={styles.inputView}>
            <View style={{ flex: 0.9 }}>
                <TextInput placeholder={placeholder}
                    placeholderTextColor="#8E8E8E"
                    style={styles.input}
                />
            </View>
            <View style={{ flex: 0.1, alignItems: 'flex-end' }}>
                <Image source={icon} style={[styles.icon, { tintColor: iconColor ? iconColor : Colors.theme }]} />
            </View>
        </View>
    )
}
