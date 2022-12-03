import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 24,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  view1: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 2,
    width: 100,
    height: 100,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    flex: 3,
    width: 100,
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 32,
  },
});
