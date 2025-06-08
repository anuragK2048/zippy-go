import { Platform, Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  return (
    <View className="flex-1 rounded-2xl overflow-hidden">
      <MapView
        provider={PROVIDER_DEFAULT}
        tintColor="black"
        mapType={Platform.OS === "ios" ? "mutedStandard" : "standard"}
        style={{ flex: 1, borderRadius: 200 }}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        userInterfaceStyle="light"
      >
        <Text>Hello</Text>
      </MapView>
    </View>
  );
};

export default Map;
