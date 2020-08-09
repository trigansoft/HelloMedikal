/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from "./styles";
const slides = [
    {
        key: '1',
        title: 'Title 1',
        text: 'Find Dr and Clinic',
        image: require('@Images/1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: '2',
        title: 'Title 2',
        text: 'Find the Nearest Hospital',
        image: require('@Images/2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        title: 'Rocket guy',
        text: 'Find the Nearest Pharmacy',
        image: require('@Images/3.png'),
        backgroundColor: '#22bcb5',
    },
    {
        key: '4',
        title: 'Title 1',
        text: 'Find the Nearest Blood Bank Emergency',
        image: require('@Images/4.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: '5',
        title: 'Title 2',
        text: 'Find the Nearest Fitness Center',
        image: require('@Images/5.png'),
        backgroundColor: '#febe29',
    },
    {
        key: '6',
        title: 'Rocket guy',
        text: 'Book Appointment with Hellomedikal App',
        image: require('@Images/6.png'),
        backgroundColor: '#22bcb5',
    }
];


function AppIntro() {
    const _renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.image} style={{ resizeMode: "contain" }} />
                </View>
                <View style={{ flex: 0.2, alignItems: 'center', }}>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>hsghg</Text> */}
            <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require("@Images/logo.png")} />
            </View>
            {/* <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}></View> */}
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
                <AppIntroSlider
                    renderItem={_renderItem}
                    data={slides}
                    // dotStyle={{}}
                    showNextButton={false}
                    showSkipButton
                    bottomButton
                    activeDotStyle={{ backgroundColor: 'black' }}
                    onSkip={() => alert("Skip")}
                    onDone={() => alert("Done")}
                    renderSkipButton={() => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.skip}>Skip</Text>
                            </View>
                        )
                    }}
                    renderDoneButton={() => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.skip}>Done</Text>
                            </View>
                        )
                    }} />
            </View>
            {/* <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }} /> */}
        </View>
    );
};


export default AppIntro;
