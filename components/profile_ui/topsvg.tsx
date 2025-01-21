import React from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';



export default function TopSvg() {

  const { width } = Dimensions.get('window');
  const aspectRatio = 392 / 449;
  const adjustedWidth = width + 10;
  
  return (
    <>
      <Svg width={adjustedWidth} height={adjustedWidth / aspectRatio} viewBox="0 0 392 449" style={styles.svg} >
        <Path d="M49,0 H343 a45,45 0 0 1 45,45 V396 a45,45 0 0 1 -45,45 H49 a45,45 0 0 1 -45,-45 V45 a45,45 0 0 1 45,-45 Z" fill="black"/>
      </Svg>
    </>
  )
}

const styles= StyleSheet.create({
  svg: {
    position: 'absolute',
    top: -36,
    width: '100%',
    marginLeft: -5,
  },
  svgCir: {
    position: 'absolute',
    right: 105,
    top: 65,
  }
})