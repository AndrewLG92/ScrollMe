import { View, Text, ScrollView, StatusBar as sb, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { BlurView } from 'expo-blur'
import Divider from '@/components/Divider'
import Button from '@/components/Button'
import { router } from 'expo-router'
import Constants from 'expo-constants'
import axios from 'axios'


export default function Login() {
  const barht = sb.currentHeight;
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const ip = Constants.expoConfig?.extra?.LOCAL_IP;
  const port = Constants.expoConfig?.extra?.LOCAL_PORT;

  


  //Submit Function
  const submitForm = async () => {
    console.log('Form:', form);
    console.log('IP:', ip);
    console.log('Port:', port);
    try {
      const response = await axios.post(`http://${ip}:${port}/api/auth/login`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // const response = await fetch(`http://${ip}:${port}/api/auth/login`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(form),
      // });

      // if(!response) {
      //   console.log('Error Logging in:', response);
      //   throw new Error('Error Logging in');
      // }

      //const data = await response.json();
      console.log('User Logged in:', response.data);
      router.push('/profile');
    } catch (error: any) {
      if(error.response) {
        console.log('Error Logging in:', error.response.data);
        
      }else if(error.request) {
        console.log('Error Logging in:', error.request);
      }else {
        console.log('Error Logging in:', error.message);
      }
    }
  };

  const styles = StyleSheet.create({
    main: {
      marginTop: barht,
      backgroundColor: "#fff",
      flex: 1,
      justifyContent: 'center',
    },
    form: {
      padding: 25,
      borderRadius: 45,
      
    },
    blurContainer: {
      padding: 20,
      margin: 16,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#ec4899',
      backgroundColor: '#fff',
      boxShadow: '0px 0px 50px 10px rgba(0,0,0,0.5)',
      gap: 40,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    textStyle: {
      fontFamily: 'PermanentMarker', 
      textShadowColor: 'black', 
      textShadowOffset: {'width': 4, 'height': 5}, 
      textShadowRadius: 15,
      textAlign: 'center',
    },
    children3: {
      flex: 1,
      alignItems: 'center',
      gap: 40,
    }
  });


  return (
    <SafeAreaView className="min-h-[100vh]" style={styles.main}>
      <ScrollView>
        <Text className="text-6xl p-5 text-pink-500" style={styles.textStyle}>
          Login!&nbsp;
        </Text>
        <View style={styles.form}>
          <BlurView intensity={100} style={styles.blurContainer}>
            <FormField 
              title="Email"
              placeholder="Email"
              handleChangeText={(e: string) => setForm({...form, email: e.toLowerCase()})}
            />
            <FormField 
              title="Password"
              placeholder="Password"
              handleChangeText={(e: string) => setForm({...form, password: e})}
            />
          </BlurView>
        </View>
        <View style={styles.children3}>
          <Button title="Submit" onPress={submitForm} boxShadow="0px 0px 50px 10px rgba(0,0,0,0.5)" />
          <Divider title='Login!'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}