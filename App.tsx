import { HelloWorld } from "components/HelloWorld";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function App() {
  /**
   * Note: If using redux, wrap it outside of the PaperProvider https://callstack.github.io/react-native-paper/docs/guides/getting-started
   * To customize the theme, see https://callstack.github.io/react-native-paper/docs/guides/getting-started#customization
   */
  return (
    <PaperProvider>
      <View style={styles.container}>
        <HelloWorld />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
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
