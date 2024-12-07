import { View, Text, Dimensions, StatusBar as sb } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StatusBar } from 'expo-status-bar';



export default function SplashScreen() {

  const videoUri = require('@/assets/videos/stock.mp4');

  const { height, width } = Dimensions.get('window');
  const barht = sb.currentHeight;

  const videoSplash = useVideoPlayer(videoUri, (player) => {
    player.loop = true;
    player.play();
  });
  return (
    <SafeAreaView className={`container min-h-[100vh] flex relative`} style={{marginTop: barht}}>
      <VideoView style={{height: height, width: width, position: 'absolute', display: 'flex'}} player={videoSplash} nativeControls={false} allowsFullscreen contentFit='cover' />
      <View className="flex z-50 container h-40 min-w-40 border-4 border-red-700">
        <Text className="text-4xl z-20 font-bold text-center text-red-600">
          Welcome!
        </Text>
      </View>
      <StatusBar backgroundColor='#161622' style={'light'}/>
    </SafeAreaView>
  )
};