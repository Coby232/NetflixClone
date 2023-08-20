import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return ( <Text style={styles.container}> Home Screen </Text>
    
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        fontSize:30,
        marginTop:20,
        color:'#FFFFFF'
    }
})