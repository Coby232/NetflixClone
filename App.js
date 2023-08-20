import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen/HomeScreen';
import Homewidgets from './HomeScreen/Homewidgets';



export default function App() {
    return ( < NavigationContainer >
        <SafeAreaView style = { styles.container } >
        <StatusBar style = "auto"/>
        <HomeScreen/>
        <Homewidgets/>
        </SafeAreaView></NavigationContainer >
    );
}
{/*include scrollView component -- Horizontal, marginVertical property*/}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040404',
        alignItems: 'center',
        justifyContent: 'center',
    }
});