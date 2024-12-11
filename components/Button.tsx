import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface BtnProps {
  title: string,
  onPress: any,
}

const Button = ({title, onPress}: BtnProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text} >{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ec4899',
    boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.5)',
    width: 150,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ec4899',
    fontFamily: 'PermanentMarker',
    textShadowColor: 'black', 
    textShadowOffset: {'width': 2, 'height': 2}, 
    textShadowRadius: 5,
  }
});

export default Button