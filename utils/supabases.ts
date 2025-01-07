import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import * as aesjs from 'aes-js';
import 'react-native-get-random-values';
import Constants from 'expo-constants';


class LargeSecureStore {
  private async _encrypt(key: string, value: string) {
    const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));

    const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
    const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

    await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));

    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }

  private async _decrypt(key: string, value: string) {
    const encryptionKeyHex = await SecureStore.getItemAsync(key);
    if(!encryptionKeyHex) {
      return encryptionKeyHex
    }

    const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
    const decyptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));
    return aesjs.utils.utf8.fromBytes(decyptedBytes);
  }

  async getItem(Key: string)  {
    const encrypted = await AsyncStorage.getItem(Key);
    if(!encrypted) {
      return encrypted;
    }
    return await this._decrypt(Key, encrypted);
  }

  async removeItem(Key: string) {
    await AsyncStorage.removeItem(Key);
    await SecureStore.deleteItemAsync(Key);
  }

  async setItem(Key: string, Value: string) {
    const encrypted = await this._encrypt(Key, Value);
    await AsyncStorage.setItem(Key, encrypted);
  }
}
//const ip = Constants.expoConfig?.extra?.LOCAL_IP;
//const port = Constants.expoConfig?.extra?.LOCAL_PORT;

const supabaseURL = Constants.expoConfig?.extra?.SUPABASE_URL || '';
const supabaseKey = Constants.expoConfig?.extra?.SUPABASE_ANON_KEY || '';

export const supabase = createClient(
  supabaseURL,
  supabaseKey,
  {
    auth: {
      storage: new LargeSecureStore(),
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);