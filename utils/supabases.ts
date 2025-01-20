import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const supabaseURL = Constants.expoConfig?.extra?.SUPABASE_URL || '';
const supabaseKey = Constants.expoConfig?.extra?.SUPABASE_ANON_KEY || '';

export const supabase = createClient(
  supabaseURL,
  supabaseKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);

// FOR LOCAL DB DOCKER.
// export const supabase = createClient(
//   "http://127.0.0.1:54321",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0",
//   {
//     auth: {
//       storage: AsyncStorage,
//       autoRefreshToken: true,
//       persistSession: true,
//       detectSessionInUrl: true,
//     },
//   }
// );