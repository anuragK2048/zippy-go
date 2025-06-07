import { images } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home1</Text>
        <Image source={images.onboarding2} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
