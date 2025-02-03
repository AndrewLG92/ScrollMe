import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

interface Props {
  bStyle?: 'default' | 'light-content' | 'dark-content';
  bgColor?: string;
}

export default function FocusAwareStatusBar({bStyle, bgColor}: Props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar barStyle={bStyle} backgroundColor={bgColor} /> : null;
}