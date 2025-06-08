import { Redirect } from "expo-router";
import React from "react";

const Home = () => {
  // const { isSignedIn, isLoaded } = useAuth();

  // if (!isLoaded) {
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  // if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

  // return <Redirect href="/(auth)/welcome" />;
  return <Redirect href="/(root)/(tabs)/home" />;
};

export default Home;
