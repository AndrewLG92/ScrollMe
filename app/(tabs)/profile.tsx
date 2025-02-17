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
import { supabase } from '@/utils/supabases';
import { useFocusEffect } from '@react-navigation/native';
import PostModal from '@/components/PostModal';
import Feather from '@expo/vector-icons/Feather';



export default function Profile() {
  
  const [refreshing, setRefreshing] = useState(false);
  const {user, loading} = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [submittedText, setSubmittedText] = useState('');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  useFocusEffect(
    useCallback(() =>{
      CheckforDisplayName();
    }, [])
  );

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
  const imgUri = user?.user_metadata.avatar_url;
  const userName = user?.user_metadata.full_name;
  
  const CheckforDisplayName = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select("display_name")
      .eq("id", user?.id)
      .single()

    if(data?.display_name) {
      setDisplayName(data?.display_name);
    }
  }
  

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
    },
    bioContainer: {
      flex: 1,
      position: 'relative',
      top: 40,
      width: '83%',
      padding: 25,
      alignSelf: 'center',
      borderWidth: 3,
      borderRadius: 10,
      backgroundColor: 'black',

    },
    bioHeader: {
      fontSize: 16,
      color: '#fff',
      textDecorationLine: 'underline',
    },
    bioContent: {
      color: '#fff'
    },
    editBtn: {
      flex: 1,
      padding: 10,
      position: 'relative',
      right: 20,
      top: 20,
      alignItems: 'flex-end',
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <FocusAwareStatusBar bStyle="light-content" bgColor="#000" />
        <TopSvg  />
        {/* <View style={styles.editBtn}>
          <Feather name="edit" size={24} color="white" />
        </View> */}
        <View style={styles.imgContainer}>
          <Image 
            style={styles.img}
            source={imgUri}
            contentFit='fill'
          />
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>
            {displayName ? displayName : userName}
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
            onPress={openModal}
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
        <PostModal 
          visible={modalVisible}
          onClose={closeModal}
          title='Status Post'
          buttonText="Post"
        />

        <View style={styles.bioContainer}>
          <Text style={styles.bioHeader}>About Me</Text>
          <Text style={styles.bioContent}></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
