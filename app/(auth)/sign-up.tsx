import { View, Text, ScrollView, StatusBar as sb, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'

export default function SignUp() {
  const barht = sb.currentHeight;
  const [form, setForm] = useState({
    displayname: '',
    email: '',
    password: '',
    bio: '',
    birthday: '',
  });
  const onTextChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value});
  }
  const styles = StyleSheet.create({
    main: {
      backgroundColor: 'black',
      marginTop: barht,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    form: {
      flex: 1,
      borderWidth: 4,
      borderRadius: 45,
      backgroundColor: '#fff',
      padding: 40,
      position: 'relative',
      bottom: 0,
      top: 100,
      gap: 50,
    }
  });


  return (
    <SafeAreaView className="min-h-[100vh] grid grid-cols-1 items-center" style={styles.main}> 
      <ScrollView>
        <View style={styles.form}>
          <FormField 
            title="Display Name"
            placeholder="Display Name"
            handleChangeText={onTextChange}
          />
          <FormField 
            title="Email"
            placeholder="Email"
            handleChangeText={onTextChange}
          />
          <FormField 
            title="Password"
            placeholder="Password"
            handleChangeText={onTextChange}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}