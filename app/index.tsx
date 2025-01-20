import { View, Text, Dimensions, StyleSheet, StatusBar as SB} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useVideoPlayer, VideoView } from 'expo-video';
import Button from '../components/Button';
import {  router } from 'expo-router';

export default function SplashScreen() {

  const videoUri1 = require('@/assets/videos/splash-bg-2.mp4');
    
  const player = useVideoPlayer(videoUri1, (player) => {
    player.loop = true;
    player.play();
  });

  const ScreenHeight = SB.currentHeight;

  const { height, width } = Dimensions.get('window');

  const onSignUpPress = () => {
    router.push('/(auth)/sign-up');
  };
  const onLoginPress = () => {
    router.push('/(auth)/login-in');
  };

  const styles = StyleSheet.create({
    container: {
      marginTop: ScreenHeight
    },

    textStyle: {
      fontFamily: 'PermanentMarker', 
      textShadowColor: 'black', 
      textShadowOffset: {'width': 4, 'height': 5}, 
      textShadowRadius: 15,
    },
  });
  
  

  return (
    
      <SafeAreaView className="container flex relative" style={styles.container}>
        <StatusBar backgroundColor='#161622' style={'light'}/>
        <VideoView 
          style={{height: height, width: width, position: 'absolute', display: 'flex'}} 
          player={player} 
          nativeControls={false} 
          allowsFullscreen contentFit='cover'
          
        />
        <View className="grid grid-cols-1 gap-80 justify-items-evenly min-h-[70vh] mt-10 items-center z-50 container">
          <Text className="text-6xl z-10 p-5 mt-5 text-pink-500" style={styles.textStyle}>
          &nbsp;Scroll Me!&nbsp;
          </Text>

          <View className="grid grid-cols-1 gap-20 mt-28">
            <Button
              title='Sign Up'
              onPress={onSignUpPress}
            />
            {/* <Button 
              title='Login'
              onPress={onLoginPress}
            /> */}
          </View>
        </View>
      </SafeAreaView>
    
  )
};