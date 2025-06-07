import { icons } from "@/constants";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";

function OAuth() {
  const handleGoogleSignIn = async () => {};
  return (
    <View>
      <View className="flex flex-row mt-4 justify-center items-center gap-x-3">
        <View className="h-[1px] bg-general-100 flex-1" />
        <Text className="text-lg">Or</Text>
        <View className="h-[1px] bg-general-100 flex-1" />
      </View>
      <CustomButton
        title="Log In with Google"
        bgVariant="outline"
        textVariant="primary"
        className="mt-4 w-full"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-6x h-6 mx-2"
          />
        )}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}

export default OAuth;
