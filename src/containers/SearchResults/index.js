import React, { useState } from 'react';
import { Text, View, TextInput, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./styles"
import { Images, Strings } from '@constants';
import { Rating } from '@components'

export default function SearchResults(props) {
    const [doctorsArray, setDoctorsArray] = useState(Strings.list[0].doctors);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [rating, setRating] = useState(0);
    //570765481
    function onItem(item, index) {
        setDoctorsArray(item.doctors)
        setSelectedIndex(index)
        // this.setState({
        //     doctorsArray: item.doctors,
        //     selectedIndex: index
        // })
    }

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    width: 100,
                    marginRight: 10,
                    alignItems: 'center',
                    marginLeft: index === 0 ? 10 : 0
                }}
                onPress={() => onItem(item, index)}
            >
                <Image source={{ uri: item.image }}
                    style={[styles.imageStyle, { borderWidth: index === selectedIndex ? 2 : 0 }]}
                />
                <Text style={{ marginTop: 5, fontSize: 14, textAlign: 'center', color: "#585858" }}>{item.name}</Text>

            </TouchableOpacity>
        );
    };
    const _renderData = ({ item, index }) => {
        return (
            <View style={styles.row}>
                <View style={{ flex: 0.4, }}>
                    <Image source={{ uri: item.image }}
                        style={styles.image}
                        resizeMode={"contain"}
                    />
                </View>

                <View style={{ flex: 0.6, }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.specialist}>{item.specialist}</Text>
                    <Text style={styles.location}>Professor in {item.location}</Text>
                    <Text style={styles.hospital}>{item.hospital}</Text>
                    <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.rating}>5.0</Text>
                            <Rating
                                style={styles.starIcon}
                                rating={5}
                            />
                        </View>


                        <Image source={Images.heart} style={styles.heart} />
                    </View>

                </View>
            </View>
        );
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={{ height: 64, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center', justifyContent: 'space-between' }}>

                    <Image source={Images.back} style={styles.backIcon} />
                    <Text style={styles.heading}>Search Results</Text>
                    <Image source={{ uri: "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg" }}
                        style={{ height: 40, width: 40, borderRadius: 20 }} />
                </View>
                <View style={styles.container}>

                    <Text style={styles.headerText}>Doctors -----</Text>
                    <Text style={styles.header}>Specialist</Text>
                    <FlatList
                        style={styles.flatlistStyle}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        // extraData={this.state}
                        data={Strings.list}
                        renderItem={_renderItem}
                        keyExtractor={item => item.id}
                    />
                    <FlatList
                        style={{
                            marginTop: 10,
                        }}
                        showsVerticalScrollIndicator={false}
                        //  extraData={this.state}
                        data={doctorsArray}
                        renderItem={_renderData}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>
        </ScrollView>
    );

}

