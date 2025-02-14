import { View, Text, StyleSheet, ScrollView, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopSvg from '@/components/profile_ui/topsvg'
import BottomSvg from '@/components/profile_ui/bottomsvg'
import Ionicons from '@expo/vector-icons/Ionicons';
import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { supabase } from '@/utils/supabases'


const Settings = () => {

  const EditProfile = () => {
    return router.push('/(settings)/account');
  }

  const LogOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView >
        <FocusAwareStatusBar bStyle="dark-content" bgColor="#fff" />
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="settings" size={36} color="black" />
          </View>
          <Text style={styles.title}>Settings</Text>
        </View>
        <TopSvg fill="white" />
        <BottomSvg />

        <View style={styles.listContaier}>
          <Pressable
            onPress={EditProfile}
            style={styles.pressWrapper}
          >
            <Text style={styles.listText}>Edit Profile</Text>
            <Feather name="chevron-right" size={24} color="white" />
          </Pressable>

          <Pressable
            onPress={() => console.log("pressed")}
            style={styles.pressWrapper}
          >
            <Text style={styles.listText}>Change Password</Text>
            <Feather name="chevron-right" size={24} color="white" />
          </Pressable>

          <Pressable
            onPress={LogOut}
            style={styles.pressWrapper}
          >
            <Text style={styles.listText}>Logout</Text>
            <AntDesign name="logout" size={24} color="white" />
          </Pressable>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#808080',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
    top: 25,
    left: 25,
    width: '50%',
    zIndex: 1,
  },
  iconContainer: {
    flex: 1,
    top: 4,
    width: 'auto',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#000',
    zIndex: 1,
  },
  listContaier: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
    //height: "82%",
    width: '90%',
    //borderWidth: 2,
    //borderColor: '#fff',
    zIndex: 1,
  },
  listText: {
    color: '#fff',
    fontSize: 21,
    fontFamily: 'Roboto',
  },
  pressWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  }
})

export default Settings

