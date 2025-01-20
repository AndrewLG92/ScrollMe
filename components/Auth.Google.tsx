import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import { supabase } from '@/utils/supabases'
import Constants from 'expo-constants'
import { useEffect } from 'react';
import { Redirect, router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { AppState } from 'react-native';


AppState.addEventListener('change', (state) => {
  if(state === 'active'){
    supabase.auth.startAutoRefresh()
  }else{
    supabase.auth.stopAutoRefresh()
  }
})

export default function AuthGoogle() {

  const clientId = Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID;
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: clientId,
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      //console.log(JSON.stringify(userInfo, null, 2));
      
      if(userInfo.data?.idToken){
        const {data, error} = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: userInfo.data?.idToken,
        });


        router.push('/profile');
      } else {
        throw new Error('No Id Token Present!');
      }
      
    } catch (error: any) {
      console.log("Sign In Error:", error.code, error.message);
    }
  };

  return (
    <GoogleSigninButton 
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
  )
}