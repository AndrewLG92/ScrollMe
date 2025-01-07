import { useCallback, useState } from 'react';
import {View, Text, RefreshControl} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
        <View>
          <Text>Home Screen</Text>
        </View>
      </RefreshControl>
    </SafeAreaView>
  );
}
