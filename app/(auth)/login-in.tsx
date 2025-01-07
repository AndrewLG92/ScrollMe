import { View, Text, ScrollView, StatusBar as sb, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { BlurView } from 'expo-blur'
import Divider from '@/components/Divider'
import Button from '@/components/Button'
import { router } from 'expo-router'




export default function Login() {

  const googleIcon = require("@/assets/images/googleIcon.png");
  const barht = sb.currentHeight;
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  

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
          <Button title="Submit" onPress={()=> void 0} boxShadow="0px 0px 50px 10px rgba(0,0,0,0.5)" />
          <Divider title='Login!'/>
        </View>
        <View className="flex items-center mt-16">
          <TouchableOpacity onPress={()=> void 0}>
            <Image 
              source={googleIcon}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}