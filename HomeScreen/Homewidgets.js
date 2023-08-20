import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import movie2 from '../movie_posters/movie2.jpeg'
import movie3 from '../movie_posters/movie3.jpeg'
import movie4 from '../movie_posters/movie5.jpeg'

const Homewidgets = () => {
  return (
  <View style={styles.container}> 
    <Text style={styles.Header}>Action & Adventure Programmes</Text>
  <Image style={styles.Image1}source={movie2}/>
  <Image style={styles.Image2}source={movie3}/>
  <Image style={styles.Image2}source={movie4}/>
</View>
  )
}

export default Homewidgets

const styles = StyleSheet.create({
    container:{
        top:-300,
        flex:1,
        gap:10,
        flexDirection:'row'
    },
    Header:{
     color:'#FFFFFF',
     fontSize:20,
     left:150,
     marginTop:-30
    },
    Image1:{
        top:0,
        width:120,
        right:150,
        maxHeight:200,
        borderRadius:10,
        paddingTop:100
    },
    Image2:{
        top:0,
        width:120,
        right:150,
        maxHeight:200,
        borderRadius:10,
        paddingTop:100,
    }
})