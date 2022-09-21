import { View, Text, StyleSheet } from "react-native";
// Styles
import colors from "styles/colors";

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Is Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    color: `rgba(${colors.tertiary.text}, 1)`,
  },
});

export default Loading;
