import {  ImageBackground, StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import Button from './Components/Button'
import { useRouter } from 'expo-router'

const index = () => {

  const router =useRouter();
  return (
   
    <ImageBackground style = {styles.background}
    source={require('../assets/images/plants.jpg')}>
    <View  style={styles.view}>
      <Text style={styles.text}>Welcome To TrafficLogistic</Text>
      <Text style={styles.text2}>An App Where you can track all your Drivers</Text>
      <Button title={"LOGIN"} 
      styleT={styles.styleT} 
      styleV={styles.styleV}
      onPress={()=>router.push('/Auth/signIn')}/>

      <Button title={"SIGN_UP"} 
      styleT={styles.styleT}
       styleV={styles.styleV}
       onPress={()=>router.push('/Auth/signUp')}/>

    </View>
    </ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({

    background:{
      flex:1,
      resizeMode:"cover"
    },

    text:{
       color:"white",
       fontSize:27,
       fontWeight:"bold",
       textAlign:"center"
    },
    text2:{
      marginTop:15,
      color:"white",
      fontSize:16,
      textAlign:"center"

   },
    view:{
     padding:10,
     backgroundColor:'rgba(0,0,0,0.5)',
     borderRadius:10,
     flex:0.5,
     margin:50,
     top:95
    },
    styleV:{
      position:"relative",
      backgroundColor:"rgba(0,0,0,0.8)",
      marginBottom:15,
      marginTop:25,
      marginRight:45,
      marginLeft:45,
      borderColor:"green",
      borderRadius:7,
      borderWidth: 1

    },
    styleT:{
      color: 'white' ,
      fontWeight:"bold",
      fontSize:23,
      textAlign:"center"
    }
})
