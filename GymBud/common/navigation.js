import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                },
                labelStyle: {
                    display: 'none',
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Options"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="options" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
