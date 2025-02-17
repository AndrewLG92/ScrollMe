# Welcome to ScrollMe app 👋

<video src="https://github.com/user-attachments/assets/b71fd892-9ece-4aa2-91df-f00865750c7e"></video>


This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

1.a Need a Device. Connect Phone to PC. 
   Android: 
      adb devices
   IOS:
      TBA (Not Working on Apple)


1.b Before starting you will need to build a stand alone app. best use a Device. (React Native Google Sign In doesn't work with Expo Dev.)
   Commands: 
      Option 1: (eas-cli) 
         eas build:configure
         select the device you want. IOS or Android. 
         eas build --platform android --profile development
      This one will work a lot better. Only because on the Expo Site, you can watch it building out so if ANY errors
      you can debug and resolve them. 
      
      Option 2: this one is tricky. I know I had to do a ton of set up to get google and supabase to work. ( will find link to you later.)
         npx expo run:android <--build first-->
         implementation 'com.google.android.gms:play-services-auth:20.7.0' <--Add to File /android/app/build.gradle look for Object "dependencies" >
         I used WebClient in the Google Cloud Console, because Supabase for Google Auth ask for Client and Secret after setting that up
         get the Client Id Look for file /android/src/main/strings.xml add <string name="server_client_id">[YOUR CLIENT ID]</string>
         For OAuth, you need to add a test user. 
         There is a bunch more info here: https://www.youtube.com/watch?v=vojHmGUGUGc

2. Start the app

   ```bash
    npx expo start
   ```
   or npx expo start:android (Starts up Emulator)

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
