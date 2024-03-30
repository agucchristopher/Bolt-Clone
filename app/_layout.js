import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default () => {
  let [loaded, error] = useFonts({
    PBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="verifyCode" />
      <Stack.Screen name="nameDetails" />
      <Stack.Screen name="home" />
    </Stack>
  );
};
