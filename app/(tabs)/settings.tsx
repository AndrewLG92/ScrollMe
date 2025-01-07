import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { router } from 'expo-router'



type ItemData = {
  id: string;
  title: string;
  onPress?: () => void;
}


const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Account Info',
  },
  {
    id: '2',
    title: 'Logout',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
)


const Settings = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#f9c2ff' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => item.onPress ? item.onPress() : setSelectedId(item.id)} 
        backgroundColor={backgroundColor}
        textColor={color}
      />
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} className="min-height-[90vh]" >
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    top: 10,
    padding: 20,
    marginVertical: 25,
    marginHorizontal: 25,
    borderRadius: 30,
    boxShadow: '0px 0px 6px 5px rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Chewy',
  },
})

export default Settings

