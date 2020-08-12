/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';
import styles from "./styles"
import { Images } from '@constants';
function InitialScreen(props) {
    useEffect(() => {

    }, []);

    const signInPage = () => {
         
         props.navigation.push('SignIn');
    }

    const signUpPage = () => {
        
    }

    const exploreGuest = () => {

    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.65 }}>
                <Image source={Images.banner} style={{ height: "100%", width: "100%" }} />
            </View>
            <View style={{ flex: 0.15, justifyContent: 'center', paddingHorizontal: 25 }}>
                <Text style={styles.text}>Welcome to the {"\n"} Hellomedikal app</Text>
            </View>
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, }} >
                <TouchableOpacity style={styles.signInButton} onPress={()=>{signInPage()}}>
                    <Text style={styles.signIn} >SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpButton} onPress={()=>{signUpPage()}}>
                    <Text style={styles.signUp}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: 'black' }} onPress={()=>{exploreGuest()}}>
                    <Text style={styles.guest}>Explore as Guest</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default InitialScreen;
