import "dotenv/config";

export default {
  expo: {
    extra: {
      googlePlacesApiKey: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
    },
    name: "ZippyGo",
    slug: "ZippyGo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "zippygo",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.ZippyGo",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#111111",
      },
      edgeToEdgeEnabled: true,
      package: "com.anonymous.ZippyGo",
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
        },
      },
    },
    web: {
      bundler: "metro",
      output: "server",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      [
        "expo-router",
        {
          origin: "https://zippygo.dev/",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};
