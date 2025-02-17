import { View, Text, StyleSheet, TextInput, Button, Pressable, Platform} from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/utils/globalcontext';
import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import { updateProfile } from '@/utils/api/controls';


export default function Account() {
  const [newDisplay, setNewDisplay] = useState('');
  const [newAboutMe, setNewAboutMe] = useState('');
  
  const {user, loading} = useAuth();

  



  const handleProfileUpdate = async () => {
    const success = await updateProfile(user?.id as string, { display_name: newDisplay});
    if(success) {
      console.log("Profile Updated!");
    }else{
      console.log("Failed to Update!");
    }
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar bStyle="dark-content" bgColor="#fff" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profile Update!</Text>
      </View>
      <TextInput 
        value={newDisplay}
        onChangeText={(newDisplay) => setNewDisplay(newDisplay) }
        style={styles.input}
        placeholder='Display Name'
      />
      <TextInput 
        value={newAboutMe}
        onChangeText={(newAboutMe) => setNewAboutMe(newAboutMe)}
        style={styles.aboutMe}
        multiline={true}
        numberOfLines={4}
        
        maxLength={200}
        textAlignVertical='top'
        placeholder='About Me'
        editable
      />
      <Pressable
        style={styles.btn}
        onPress={handleProfileUpdate}
      >
        <Text style={styles.btnText}>Submit</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {

  },
  headerText: {
    fontSize: 36,
    fontFamily: 'Roboto',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  btn: {
    height: 40,
    margin: 12,
    width: 100,
    borderWidth: 1,
    padding: 10,
    borderColor: '#000',
    backgroundColor: 'skyblue',
  },
  btnText: {
    textAlign: 'center',
    color: '#000'
  },
  aboutMe: {
    height: 100,
    margin: 12,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff'
  }
});