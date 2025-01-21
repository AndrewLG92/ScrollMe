import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Divider from '@/components/Divider'
import AuthGoogle from '@/components/Auth.Google'
import RegisterForm from '@/components/RegisterForm'

export default function Register() {
  

  return (
    <SafeAreaView className="min-h-[100vh]" style={styles.main}>
      <ScrollView>
        <Text 
          className="text-pink-500" 
          style={styles.textStyle}
          >
          Register!
        </Text>
        <View>
          <RegisterForm />
        </View>
        <Divider title='Socials'/>
        <View style={styles.container}>
          <AuthGoogle />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  form: {
    padding: 25,
    borderRadius: 45,
    //fontFamily: 'Chewy',
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'Roboto', 
    textShadowColor: 'black', 
    textShadowOffset: {'width': 2, 'height': 1}, 
    textShadowRadius: 12,
    textAlign: 'center',
    fontSize: 40,
    padding: 5,
  },
  children3: {
    flex: 1,
    alignItems: 'center',
    gap: 40,
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
});