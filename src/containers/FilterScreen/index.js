import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Modal } from 'react-native'
import styles from "./styles";
import { Images } from '@constants'
import { Logo } from '@components'
import FilterModal from "./FilterModal"
export default function FilterScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ margin: 20, flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.header}>FIND THE{"\n"}NEAREST DOCTOR</Text>
                    <TouchableOpacity style={styles.filter} onPress={() => setModalVisible(true)}>
                        <Image source={Images.filter} style={styles.icon} />
                        <Text style={styles.filterText}>Filters</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 200 }} >
                    <Logo />
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                    <View style={styles.inputView}>
                        <View style={{ flex: 0.95 }}>
                            <TextInput placeholder="Type Keyword..."
                                placeholderTextColor="#8E8E8E"
                                style={styles.input}
                            />
                        </View>
                        <View style={{ flex: 0.05, alignItems: 'center' }}>
                            <Image source={Images.dropdown} style={styles.icon} />
                        </View>
                    </View>

                    <View style={[styles.inputView, { marginTop: 30 }]}>
                        <View style={{ flex: 0.95 }}>
                            <TextInput placeholder="Search..."
                                placeholderTextColor="#8E8E8E"
                                style={styles.input}
                            />
                        </View>
                        <View style={{ flex: 0.05, alignItems: 'center' }}>
                            <Image source={Images.pin} style={styles.icon} />
                        </View>
                    </View>


                    <View style={[styles.inputView, { marginTop: 20 }]}>

                        <TextInput
                            placeholder="Doctor - Specialist"
                            placeholderTextColor="#8E8E8E"
                            style={styles.input}
                        />

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.searchButton}>
                            <Text style={styles.searchText}>Search Now</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resetButton}>
                            <Text style={styles.resetText}>RESET FILTER</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.advance}>
                        <Text style={styles.advanceText}>Advance Search</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <FilterModal onClose={() => setModalVisible(false)} />
                </Modal>
            </View>
        </ScrollView>

    )
}
