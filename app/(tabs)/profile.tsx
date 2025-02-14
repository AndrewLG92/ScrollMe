import { useCallback, useEffect, useState } from 'react';
import {View, Text, RefreshControl, StyleSheet, Dimensions, ScrollView, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/utils/globalcontext'
import { router } from 'expo-router';
import { Image } from 'expo-image';
import TopSvg from '@/components/profile_ui/topsvg';
import MidSvg from '@/components/profile_ui/midsvg';
import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';



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
    iconContainer: {
      flex: 1,
      flexDirection: 'row',
      position: 'relative',
      top: 23,
      left: 35,
      padding: 35,
      width: '82%',
    },
    iconPress: {
      flex: 1,
      zIndex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconLabels: {
      flex: 1,
      zIndex: 1,
      fontSize: 10,
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <FocusAwareStatusBar bStyle="light-content" bgColor="#000" />
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
        <View style={styles.iconContainer}>
          <Pressable
            style={styles.iconPress}
          >
            <Octicons name="people" size={24} color="black" />
            <Text style={styles.iconLabels}>Friends</Text>
          </Pressable>
          <Pressable
            style={styles.iconPress}
          >
            <Ionicons name="images-outline" size={24} color="black" />
            <Text style={styles.iconLabels}>Gallery</Text>
          </Pressable>
          <Pressable
            style={styles.iconPress}
          >
            <MaterialIcons name="notes" size={24} color="black" />
            <Text style={styles.iconLabels}>Posts</Text>
          </Pressable>

          <Pressable
            style={styles.iconPress}
          >
            <MaterialCommunityIcons name="robot-happy-outline" size={24} color="black" />
            <Text style={styles.iconLabels}>Hobbies</Text>
          </Pressable>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
