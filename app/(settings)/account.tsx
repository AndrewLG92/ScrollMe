import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Account() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Page</Text>
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