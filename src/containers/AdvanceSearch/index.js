import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Modal } from 'react-native'
import styles from "./styles";
import Input from './Input'
import { Images } from '@constants'
import { Logo, FilterModal } from '@components'
export default function AdvanceSearch(props) {
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
                {/* <View style={{ height: 200 }} >
                    <Logo />
                </View> */}
                <View style={{ paddingHorizontal: 15 }}>
                    <Input
                        placeholder="Type Keyword..."
                        icon={Images.dropdown}
                    />
                    <Input
                        placeholder="Search..."
                        icon={Images.pin}
                    />
                    <Input
                        placeholder="Doctor - Specialist"
                    // icon={Images.pin}
                    />
                    <Input
                        placeholder="Select Language"
                        icon={Images.downArrow}
                        iconColor={"#8E8E8E"}
                    />
                    <Input
                        placeholder="Select Insurance"
                        icon={Images.downArrow}
                        iconColor={"#8E8E8E"}
                    />
                    <Input
                        placeholder="Select City"
                        icon={Images.downArrow}
                        iconColor={"#8E8E8E"}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 0.48 }}>
                            <Input
                                placeholder="Sort By"
                                icon={Images.downArrow}
                                iconColor={"#8E8E8E"}
                            />
                        </View>
                        <View style={{ flex: 0.04 }} />
                        <View style={{ flex: 0.48 }}>
                            <Input
                                placeholder="ASC"
                                icon={Images.downArrow}
                                iconColor={"#8E8E8E"}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, }}>
                        <Image source={Images.square} style={styles.checkIcon} />
                        <Text style={styles.text}>Search all with profile photos</Text>
                    </View>




                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.applyFilterButton}>
                            <Text style={styles.applyFilterText}>APPLY FILTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resetButton}>
                            <Text style={styles.resetText}>RESET FILTER</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.searchNow}>
                        <Text style={styles.searchNowText}>SEARCH NOW</Text>
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
