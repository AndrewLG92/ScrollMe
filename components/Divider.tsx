import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Divider = ({title}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.leftBar}/>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.rightBar}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginTop: 25,
  },
  leftBar: {
    height: 1,
    borderRadius: 40,
    width: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ec4899',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  rightBar: {
    height: 1,
    borderRadius: 40,
    width: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ec4899',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    fontFamily: 'Roboto',
    width: '25%',
    color: '#ec4899',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 24,
  }
})

export default Divider