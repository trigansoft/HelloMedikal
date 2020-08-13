import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppIntro, InitialScreen, SignIn, SignUp } from "@containers"

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AppIntro" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="AppIntro" component={AppIntro} />
                <Stack.Screen name="InitialScreen" component={InitialScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;