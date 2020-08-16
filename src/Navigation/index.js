import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppIntro, InitialScreen, SignIn, SignUp, Otp, RegisterForm, FilterScreen, AdvanceSearch, SearchResults } from "@containers"

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SearchResults" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="AppIntro" component={AppIntro} />
                <Stack.Screen name="InitialScreen" component={InitialScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="RegisterForm" component={RegisterForm} />
                <Stack.Screen name="FilterScreen" component={FilterScreen} />
                <Stack.Screen name="AdvanceSearch" component={AdvanceSearch} />
                <Stack.Screen name="SearchResults" component={SearchResults} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;