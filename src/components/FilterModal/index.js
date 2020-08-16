import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import Slider from "react-native-slider";
import styles from './styles'
import { Images } from '@constants'

export default function FilterModal(props) {
    const { onClose } = props
    const [sliderValue, setSliderValue] = useState(0.2);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: '#0e0e0e57', justifyContent: 'center' }}>
                <View style={styles.modalContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <Text style={styles.modalHeader}>FILTER</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Image source={Images.close} style={styles.closeIcon} />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.modalInput}>
                        <View style={{ flex: 0.05, alignItems: 'center' }}>
                            <Image source={Images.pin} style={styles.icon} />
                        </View>
                        <View style={{ flex: 0.95 }}>
                            <TextInput placeholder="Current Location"
                                placeholderTextColor="#8E8E8E"
                                style={[styles.input, { marginLeft: 10 }]}
                            />
                        </View>

                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Slider
                            value={sliderValue}
                            onValueChange={value => setSliderValue(value)}
                            minimumTrackTintColor='#73c1f5'
                            maximumTrackTintColor='#d3d3d3'
                            thumbTintColor='white'
                            trackStyle={styles.track}
                        />
                    </View>
                    <Text style={styles.dist}>Distance in (Miles) 30</Text>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyText}>APPLY FILTER</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>

    )
}
