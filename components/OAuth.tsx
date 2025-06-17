import { icons } from "@/constants";
import { fetchAPI } from "@/lib/fetch";
import { useSSO } from "@clerk/clerk-expo";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback, useEffect } from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession();

function OAuth() {
  useWarmUpBrowser();

  // Use the `useSSO()` hook to access the `startSSOFlow()` method
  const { startSSOFlow } = useSSO();

  const handleGoogleSignIn = useCallback(async () => {
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: "oauth_google",
          // For web, defaults to current path
          // For native, you must pass a scheme, like AuthSession.makeRedirectUri({ scheme, path })
          // For more info, see https://docs.expo.dev/versions/latest/sdk/auth-session/#authsessionmakeredirecturioptions
          redirectUrl: AuthSession.makeRedirectUri({
            scheme: "zippygo",
            path: "/(root)/(tabs)/home",
          }),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        if (signUp?.createdUserId) {
          await fetchAPI("/(api)/user", {
            method: "POST",
            body: JSON.stringify({
              name: `${signUp.firstName} ${signUp.lastName}`,
              email: signUp.emailAddress,
              clerkId: signUp.createdUserId,
            }),
          });
        }
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);
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
