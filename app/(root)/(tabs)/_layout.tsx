import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabIcon = () => (
  <View>
    <View>
      <Image source={icons.home} />
    </View>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <TabIcon />,
        }}
      />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="rides" />
    </Tabs>
  );
};

export default Layout;
