import { GoogleInputProps } from "@/types/type";
import { TextStyle, View, ViewStyle } from "react-native";
import GooglePlacesTextInput from "react-native-google-places-textinput";

const googlePlacesApiKey: string = process.env
  .EXPO_PUBLIC_GOOGLE_API_KEY as string;

type Styles = {
  container?: ViewStyle;
  input?: TextStyle;
  suggestionsContainer?: ViewStyle;
  suggestionsList?: ViewStyle;
  suggestionItem?: ViewStyle;
  suggestionText?: {
    main?: TextStyle;
    secondary?: TextStyle;
  };
  loadingIndicator?: {
    color?: string;
  };
  placeholder?: {
    color?: string;
  };
};

const materialStyles = {
  container: {
    width: "100%",
    marginHorizontal: 16,
  },
  input: {
    height: 56,
    borderWidth: 0,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 12,
    backgroundColor: "#F5F5F5",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  suggestionsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    marginTop: 4,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  suggestionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  suggestionText: {
    main: {
      fontSize: 16,
      color: "#212121",
    },
    secondary: {
      fontSize: 14,
      color: "#757575",
    },
  },
  loadingIndicator: {
    color: "#6200EE",
  },
  placeholder: {
    color: "#9E9E9E",
  },
};

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  const handlePlaceSelect = (place) => {
    console.log("Selected place:", place);
    handlePress(
      place.details.location.latitude,
      place.details.location.longitude,
      place.details.formattedAddress
    );
  };

  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle}`}
    >
      <GooglePlacesTextInput
        apiKey={googlePlacesApiKey}
        onPlaceSelect={handlePlaceSelect}
        fetchDetails={true}
        debounceDelay={200}
        placeHolderText={initialLocation ?? "Where do you want to go?"}
        style={materialStyles}
        detailsFields={[
          "addressComponents",
          "formattedAddress",
          "location",
          "viewport",
          "photos",
          "types",
        ]}
      />
    </View>
  );
};
export default GoogleTextInput;
