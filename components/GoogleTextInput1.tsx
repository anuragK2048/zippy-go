// import { icons } from "@/constants";
// import { GoogleInputProps } from "@/types/type";
// import { Image, View } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
// console.log(googlePlacesApiKey);
// const GoogleTextInput1 = ({
//   icon,
//   initialLocation,
//   containerStyle,
//   textInputBackgroundColor,
//   handlePress,
// }: GoogleInputProps) => {
//   return (
//     <View
//       className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle}`}
//     >
//       <GooglePlacesAutocomplete
//         fetchDetails={true}
//         placeholder="Where you want to go"
//         debounce={200}
//         styles={{
//           textInputContainer: {
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 20,
//             marginHorizontal: 20,
//             position: "relative",
//             shadowColor: "#d4d4d4",
//           },
//           textInput: {
//             backgroundColor: textInputBackgroundColor
//               ? textInputBackgroundColor
//               : "white",
//             fontSize: 16,
//             fontWeight: "600",
//             marginTop: 5,
//             width: "100%",
//             borderRadius: 200,
//           },
//           listView: {
//             backgroundColor: textInputBackgroundColor
//               ? textInputBackgroundColor
//               : "white",
//             position: "relative",
//             top: 0,
//             width: "100%",
//             borderRadius: 10,
//             shadowColor: "#d4d4d4",
//             zIndex: 99,
//           },
//         }}
//         onPress={(data, details = null) => {
//           handlePress({
//             latitude: details?.geometry.location.lat!,
//             longitude: details?.geometry.location.lng!,
//             address: data.description,
//           });
//         }}
//         query={{
//           key: {process.env.EXPO_PUBLIC_GOOGLE_API_KEY},
//           language: "en",
//         }}
//         renderLeftButton={() => (
//           <View className="justify-center items-center w-6 h-6">
//             <Image
//               source={icon ? icon : icons.search}
//               className="w-6 h-6"
//               resizeMode="contain"
//             />
//           </View>
//         )}
//         textInputProps={{
//           placeholderTextColor: "gray",
//           // placeholder: initialLocation ?? "Where do you want to go?",
//         }}
//         predefinedPlaces={[]}
//         minLength={2}
//       />
//       {/* <GooglePlacesAutocomplete
//         predefinedPlaces={[]}
//         placeholder="Search for a place"
//         onPress={(data, details = null) => {
//           console.log("Place data:", data);
//           console.log("Place details:", details);
//         }}
//         query={{
//           key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
//           language: "en",
//         }}
//         fetchDetails={true}
//         textInputProps={{}}
//         styles={{
//           textInput: {
//             height: 50,
//             borderRadius: 8,
//             paddingHorizontal: 10,
//             backgroundColor: "#f0f0f0",
//           },
//         }}
//       /> */}
//     </View>
//   );
// };

// export default GoogleTextInput1;
