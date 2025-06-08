import { Image, TextInput, View } from "react-native";

const GoogleTextInput = ({
  icon,
  containerStyle,
  handlePress,
}: {
  icon: any;
  containerStyle: any;
  handlePress: any;
}) => {
  return (
    <View
      className={`${containerStyle} w-full flex flex-row rounded-full items-center h-16`}
    >
      <Image source={icon} className="h-6 w-6 ml-4 mr-2" resizeMode="contain" />
      <TextInput
        className="text-lg w-full"
        placeholder="Where do you want to go?"
      />
    </View>
  );
};

export default GoogleTextInput;
