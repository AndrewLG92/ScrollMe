import React from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import Svg, { Path, Image as SvgImage } from 'react-native-svg';

interface Props {
  imageUrl: string;
}

export default function TopSvg({ imageUrl }: Props) {

  const { width } = Dimensions.get('window');
  const aspectRatio = 392 / 337;
  const adjustedWidth = width + 10;
  
  return (
    <>
      <Svg width={adjustedWidth} height={adjustedWidth / aspectRatio} viewBox="0 0 392 337" style={styles.svg}>
        <Path
          d="M49 0H343C368.852 0 388 19.1482 388 45V284C388 309.852 368.852 329 343 329H49C23.1482 329 4 309.852 4 284V45C4 19.1482 23.1482 0 49 0Z"
          fill="#000"
        />
      </Svg>
      <Svg width="160" height="160" viewBox="0 0 160 160" style={styles.svgCir}>
        <Path d="M148.5 74C148.5 114.59 115.372 147.5 74.5 147.5C33.6278 147.5 0.5 114.59 0.5 74C0.5 33.4102 33.6278 0.5 74.5 0.5C115.372 0.5 148.5 33.4102 148.5 74Z" fill="white" stroke="black"/>

        {/* Image inside the Circle */}
        <SvgImage
            href={{ uri: imageUrl }} // Replace with your image URL or require() for local images
            x="25" // Adjust to fit the image inside the circle
            y="25" // Adjust to fit the image inside the circle
            width="100" // Adjust size to fit inside the circle
            height="100" // Adjust size to fit inside the circle
            preserveAspectRatio="xMidYMid slice" // Ensures the image scales properly to fill the circle
          />
      
      </Svg>

    </>
  )
}

const styles= StyleSheet.create({
  svg: {
    position: 'absolute',
    top: -37,
    width: '100%',
    marginLeft: -5
  },
  svgCir: {
    position: 'absolute',
    right: 105,
    top: 65,
  }
})