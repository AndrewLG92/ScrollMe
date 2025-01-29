import { View, Text, Pressable, StyleSheet, LogBox } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'

interface BtnProps {
  title: string,
  onPress: any,
  boxShadow?: any,
}

export default function Button({title, onPress, boxShadow}: BtnProps) {
  const boxShade = boxShadow ? boxShadow : '0px 0px 15px 15px rgba(0, 0, 0, 0.5)';
  const styles = StyleSheet.create({
    button: {
      display: 'flex',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ec4899',
      boxShadow: boxShade,
      width: 150,
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      color: '#ec4899',
      fontFamily: 'Roboto',
      textShadowColor: 'black', 
      textShadowOffset: {'width': 2, 'height': 2}, 
      textShadowRadius: 5,
    },
  });
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text} >{title}</Text>
    </Pressable>
  )
}

