import { useCallback, useEffect, useState } from 'react';
import {View, Text, RefreshControl, Alert, StatusBar as SB, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabases';
import { useAuth } from '@/utils/globalcontext'
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import TopSvg from '@/components/profile_ui/topsvg';



export default function Profile() {
  const [refreshing, setRefreshing] = useState(false);
  const {user, loading} = useAuth();

  useEffect(() => {
    if(!user) return router.push('/sign-up');
  }, [user]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  //console.log(user?.user_metadata.avatar_url);
  const imgUri = user?.user_metadata.avatar_url;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <StatusBar translucent={true} backgroundColor='#000' style='light'/>
        <TopSvg imageUrl={imgUri}  />
        <View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
