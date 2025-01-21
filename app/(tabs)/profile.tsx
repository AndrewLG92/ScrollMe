import { useCallback, useEffect, useState } from 'react';
import {View, Text, RefreshControl, Alert, StatusBar as SB, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabases';
import { useAuth } from '@/utils/globalcontext'
import { router } from 'expo-router';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import TopSvg from '@/components/profile_ui/topsvg';
import MidSvg from '@/components/profile_ui/midsvg';



export default function Profile() {
  const [refreshing, setRefreshing] = useState(false);
  const {user, loading} = useAuth();

  useEffect(() => {
    if(!user) return router.push('/');
  }, [user]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const { width } = Dimensions.get('window');
  //console.log(user?.user_metadata.avatar_url);
  const imgUri = user?.user_metadata.avatar_url;
  const userName = user?.user_metadata.full_name;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3',
      //justifyContent: 'center',
      
    },
    imgContainer: {
      position: 'relative',
      top: 40,
      left: width / 3.3,
      width: 160,
      height: 160,
      backgroundColor: '#fff',
      borderRadius: width / 2,
      //justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      position: 'absolute',
      top: 5,
      width: 150,
      height: 150,
      borderRadius: width / 2,
    },
    usernameContainer: {
      flex: 1,
      position: 'relative',
      top: 70,
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row',
    },
    username: {
      color: '#fff',
      fontFamily: 'Roboto',
      fontSize: 24,
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <StatusBar translucent={true} backgroundColor='#000' style='light'/>
        <TopSvg  />
        <View style={styles.imgContainer}>
          <Image 
            style={styles.img}
            source={imgUri}
            contentFit='fill'
          />
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>
            {userName}
          </Text>
        </View>
        <MidSvg />
      </ScrollView>
    </SafeAreaView>
  );
}
