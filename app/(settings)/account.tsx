import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/utils/globalcontext';
import FormField from '@/components/FormField';
import Button from '@/components/Button';
import { supabase } from '@/utils/supabases';

export default function Account() {
  const [newDisplay, setNewDisplay] = useState('');
  const {user, loading} = useAuth();

  //console.log(user?.id);

  const UpdateDisplayName = async () => {

    if(!user?.id) {
      console.error("User ID is Missing");
      return;
    }
    
    if (!newDisplay || typeof newDisplay !== 'string') {
      console.error("Invalid display name:", newDisplay);
      return;
    }

    const { data, error} = await supabase
      .from('profiles')
      .update({display_name: newDisplay})
      .eq('id', user?.id)
      .select()
    
    if(error){
      console.error("Error updating display name: ", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profile Update!</Text>
      </View>
      <TextInput 
        value={newDisplay}
        onChangeText={(newDisplay) => setNewDisplay(newDisplay) }
        style={styles.input}
        placeholder='Display Name'
      />
      <Pressable
        style={styles.btn}
        onPress={UpdateDisplayName}
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
  }
});