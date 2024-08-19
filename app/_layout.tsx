import { Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(Splash)" />
        <Stack.Screen name="(AppScreens)" />
      </Stack>
    </PaperProvider>
  );
}
