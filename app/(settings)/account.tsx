import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useAuth } from '@/utils/globalcontext';
import FormField from '@/components/FormField';
import Button from '@/components/Button';

export default function Account() {

  const {user, loading} = useAuth();

  console.log(user?.id);

  

  return (
    <View style={styles.container}>
      <FormField title="Display Name" placeholder="Display Name" />
      <Button title="Submit" onPress={() => null} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  }
});