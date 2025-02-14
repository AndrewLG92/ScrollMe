import React from 'react'
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";


export default function MidSvg() {
  
  return (
    <View style={styles.midSvg}>
      <Svg width="325" height="126" viewBox="0 0 325 126" fill="none">
        <Path
          d="M29 0h267c13.81 0 25 11.19 25 25v68c0 13.81-11.19 25-25 25H29c-13.81 0-25-11.19-25-25V25C4 11.19 15.19 0 29 0z"
          fill="#FFF"
        />
      </Svg>
    </View>
  )
}

const styles= StyleSheet.create({
  midSvg: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    top: 150,
  }
})