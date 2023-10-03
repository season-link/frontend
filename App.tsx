import { HelloWorld } from "components/HelloWorld";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import config from "./tamagui.config";
import { TamaguiProvider } from "tamagui";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <HelloWorld />
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
