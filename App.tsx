import { ActivityIndicator } from "react-native";
import Public from "@routes/public.routes";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Public /> : <ActivityIndicator />}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
