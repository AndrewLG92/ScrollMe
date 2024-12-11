import { View, Text, RefreshControl, Dimensions, StatusBar as sb, StyleSheet} from 'react-native';
import React, {useState, useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button';
import { router } from 'expo-router';

export default function SplashScreen() {
  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);
  const videoUri1 = require('@/assets/videos/splash-bg-2.mp4');
  
  const player = useVideoPlayer(videoUri1, (player) => {
    player.loop = true;
    player.play();
  });
  const { height, width } = Dimensions.get('window');
  const barht = sb.currentHeight;

  const onSignUpPress = () => {
    router.push('/(auth)/sign-up');
  };
  const onLoginPress = () => {
    router.push('/(auth)/login-in');
  };

  const styles = StyleSheet.create({
    buttonContainer: {
      fontFamily: 'PermanentMarker', 
      textShadowColor: 'black', 
      textShadowOffset: {'width': 11, 'height': 5}, 
      textShadowRadius: 15,
    },
  });

  return (
    <SafeAreaView className="container min-h-[100vh] flex relative" style={{marginTop: barht}}>
      {/* <RefreshControl refreshing={refreshing} onRefresh={onRefresh}> */}
        <VideoView 
          style={{height: height, width: width, position: 'absolute', display: 'flex'}} 
          player={player} 
          nativeControls={false} 
          allowsFullscreen contentFit='cover'
          
        />
        <View className="grid grid-cols-1 gap-80 justify-items-evenly min-h-[70vh] items-center z-50 container">
          <Text className="text-6xl z-10 p-5 mt-5 text-pink-500" style={styles.buttonContainer}>
            ScrollMe!&nbsp;
          </Text>

          <View className="grid grid-cols-1 gap-20">
            <Button
              title='Sign Up'
              onPress={onSignUpPress}
            />
            <Button 
              title='Login'
              onPress={onLoginPress}
            />
          </View>
        </View>
      {/* </RefreshControl> */}
      <StatusBar backgroundColor='#161622' style={'light'}/>
    </SafeAreaView>
  )
};