import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import { supabase } from '@/utils/supabases'
import Constants from 'expo-constants'


export default function AuthGoogle() {

  const clientId = Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID;

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: clientId,
  })

  return (
    <GoogleSigninButton 
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices()
          const userInfo = await GoogleSignin.signIn()
          if(userInfo.data?.idToken) {
            const { data, error} = await supabase.auth.signInWithIdToken({
              provider: 'google',
              token: userInfo.data.idToken,
            })
            console.log(error, data)
          } else {
            throw new Error('no ID token present!')
          }
        } catch (error: any) {
          if(error.code === statusCodes.SIGN_IN_CANCELLED) {
            throw new Error('User Cancelled Login!')
          } else if ( error.code === statusCodes.IN_PROGRESS) {

          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            throw new Error('Play Service not available or outdated!')
          }else{
            throw error
          }
          
        }
      }}
    />
  )
}