import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopSvg from '@/components/profile_ui/topsvg'
import BottomSvg from '@/components/profile_ui/bottomsvg'
import Ionicons from '@expo/vector-icons/Ionicons';



const Settings = () => {
  
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView >
        
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="settings" size={36} color="black" />
          </View>
          <Text style={styles.title}>Settings</Text>
        </View>
        <TopSvg fill="white" />
        
        <BottomSvg />
        
        
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
  }
})

export default Settings

