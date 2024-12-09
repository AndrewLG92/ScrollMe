import { View, Text, Dimensions, StatusBar as sb} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button';

export default function SplashScreen() {

  const videoUri = require('@/assets/videos/splash-bg-2.mp4');
  
  const { height, width } = Dimensions.get('window');
  const barht = sb.currentHeight;

  const videoSplash = useVideoPlayer(videoUri, (player) => {
    player.loop = true;
    player.play();
  });
  return (
    <SafeAreaView className="container min-h-[100vh] flex relative" style={{marginTop: barht}}>
      <VideoView style={{height: height, width: width, position: 'absolute', display: 'flex'}} player={videoSplash} nativeControls={false} allowsFullscreen contentFit='cover' />
      <View className="grid grid-cols-1 gap-80 justify-items-evenly min-h-[70vh] items-center z-50 container">
        <Text className="text-6xl z-10 p-5 mt-5 text-pink-500" style={{ fontFamily: 'PermanentMarker', textShadowColor: 'black', textShadowOffset: {'width': 2, 'height': 2}, textShadowRadius: 5}}>
          ScrollMe!&nbsp;
        </Text>

        <View className="grid grid-cols-1 gap-20">
          <Button
            title='Sign Up'
            onPress={()=>{
              
            }}
          />
          <Button 
            title='Login'
            onPress={()=>{

            }}
          />
        </View>
      </View>

      {/* <View className="grid gap-y-16 min-h-[18vh] justify-items-center relative top-60">
        
      </View> */}
      <StatusBar backgroundColor='#161622' style={'light'}/>
    </SafeAreaView>
  )
};