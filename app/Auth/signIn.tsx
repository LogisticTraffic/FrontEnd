import { StyleSheet, Text, TouchableOpacity,ToastAndroid, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { TextInput } from 'react-native';
import { router, useRouter } from 'expo-router';
const SignIn = () => {
    const BASE_URL = 'http://192.168.11.105:8000'; // Replace with your computer's IP in WIFI
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');

    const handleSignUp =  async()=>{
       
        if( !email || !password )
        {
          
           return;
        }

        try{
            const response = await axios.post(`${BASE_URL}/api/login`,
                {
               
                email,
                password,
            });
            if (response.status === 200) {
                console.log('Axios ');

            }
           
        }catch(error)
        {
            console.error('Axios error:', error);

        }
      
    };
  return (
    <View  style={styles.container}>
      <Text style={styles.header}>Create An Account</Text>
      
        <TextInput 
         style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
        />
        <TextInput 
         style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text)=>setPassword(text)}/>

     <TouchableOpacity  style={styles.button} onPress={handleSignUp} >
        
        <Text style={styles.buttonText}>Sign In</Text>
        
        </TouchableOpacity>
     
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#4CAF50',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });