import { View, Text, ScrollView, StatusBar as sb, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { BlurView } from 'expo-blur'
import Divider from '@/components/Divider'
import Button from '@/components/Button'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import EmailForm from '@/components/EmailForm'
import AuthGoogle from '@/components/Auth.Google'

export default function SignUp() {

  //const googleIcon = require("@/assets/images/googleIcon.png");

  const barht = sb.currentHeight;
  // const [confirmPwd, setConfirmPwd ] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [form, setForm] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const submitForm = async () => {
  //   if(!form.username || !form.email || !form.password) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error',
  //       text2: 'Please fill in all fields',
  //     });
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     await createUser(form.email, form.password, form.username);

  //     router.push('/profile');
  //   }catch (error: any) {
  //     console.log('Error Creating User:', error);
  //   }finally {
  //     setIsSubmitting(false); 
  //   }
  // };

  //const ip = Constants.expoConfig?.extra?.LOCAL_IP;
  //const port = Constants.expoConfig?.extra?.LOCAL_PORT;

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
      fontSize: 40,
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
        <Text className="p-5 text-pink-500" style={styles.textStyle}>
          SignIn&nbsp;Or&nbsp;Login!
        </Text>
        <View>
          <EmailForm />
        </View>
        <Divider title='Social Login'/>
        <View className="mt-5 ml-9 flex justify-center">
          <AuthGoogle />
        </View>
        
        {/* <Text className="text-6xl p-5 text-pink-500" style={styles.textStyle}>
          Get Started!&nbsp;
        </Text>
        <View style={styles.form}>
          <BlurView intensity={100} style={styles.blurContainer}>
            <FormField 
              title="Display Name"
              placeholder="Display Name"
              handleChangeText={(e: string) => setForm({...form, username: e.toLowerCase()})}
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
          <TouchableOpacity onPress={loginInWithGoogle}>
            <Image 
              source={googleIcon}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          
        </View> */}
        
      </ScrollView>
    </SafeAreaView>
  )
}