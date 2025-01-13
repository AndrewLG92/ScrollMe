import 'dotenv/config';

export default {
  name: 'ScrollMe',
  slug: "ScrollMe",
  version: '1.0.0',
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: 'com.scrollme',
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true
  },
  
  extra: {
    SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    ANDROID_GOOGLE_ID: process.env.ANDROID_GOOGLE_ID,
    eas: {
      projectId: "8abf3f8a-d681-4dd5-8124-0d1b3f17d69f",
    },
    router: {
      origin: false
    },
  },
  newArchEnabled: true,
  
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.ScrollMe.app",
    version: 1
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-secure-store",
    "expo-router",
    [
      "expo-splash-screen",
      {
        "image": "./assets/images/splash-icon.png",
        "imageWidth": 200,
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      }
    ],
    [
      "expo-video",
      {
        "supportsBackgroundPlayback": true,
        "supportsPictureInPicture": true,
      }
    ],
    ["@react-native-google-signin/google-signin"]
  ],
  experiments: {
    "typedRoutes": true
  },

};  