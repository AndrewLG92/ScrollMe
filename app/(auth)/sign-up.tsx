import { View, Text, ScrollView, StatusBar as sb, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { BlurView } from 'expo-blur'
import Divider from '@/components/Divider'
import Button from '@/components/Button'
//import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { router } from 'expo-router'
import axios from 'axios'
import Constants from 'expo-constants'

export default function SignUp() {
  const barht = sb.currentHeight;
  const [confirmPwd, setConfirmPwd ] = useState('');
  const [form, setForm] = useState({
    displayname: '',
    email: '',
    password: '',
  });

  const ip = Constants.expoConfig?.extra?.LOCAL_IP;
  const port = Constants.expoConfig?.extra?.LOCAL_PORT;


  //Submit Function
  const submitForm = async () => {
    console.log('Form:', form);
    if(form.password !== confirmPwd) {
      alert('Passwords do not match');
      return;
    }
    if(!form.displayname || !form.email || !form.password) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const res = await axios.post(`http://${ip}:${port}/api/users`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // const res = await fetch(`http://${ip}:${port}/api/users`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(form),
      // })
      if(!res) {
        console.log('Error Creating User:', res);
        throw new Error('Error Creating User');
      }
      console.log('User Created', res);
      router.push('/profile');
    } catch (error: any) {
      console.log('Error Creating user:', error);
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
      //fontFamily: 'Chewy',
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
    },
    container: {
      flex: 1,
    },
  });


  return (
    <SafeAreaView className="min-h-[100vh]" style={styles.main}>
      <ScrollView>
        
        <Text className="text-6xl p-5 text-pink-500" style={styles.textStyle}>
          Get Started!&nbsp;
        </Text>
        <View style={styles.form}>
          <BlurView intensity={100} style={styles.blurContainer}>
            <FormField 
              title="Display Name"
              placeholder="Display Name"
              handleChangeText={(e: string) => setForm({...form, displayname: e.toLowerCase()})}
            />
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
            <FormField 
              title="Password"
              placeholder="Confirm Password"
              handleChangeText={(e: string) => setConfirmPwd(e)}
            />
          </BlurView>
        </View>
        <View style={styles.children3}>
          <Button 
            title="Submit" 
            onPress={submitForm} 
            boxShadow="0px 0px 50px 10px rgba(0,0,0,0.5)" 
          />
          <Divider title='Sign Up'/>
        </View>
        <View className="flex items-center mt-16">
          {/* <GoogleSigninButton
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {}}
            disabled={false}
          /> */}
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}