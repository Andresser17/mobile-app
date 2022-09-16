import { View, Text, TextInput, StyleSheet } from "react-native";
// Styles
import colors from "styles/colors";

function Input({ label, placeholder, value, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={`rgba(${colors.light.text}, 0.4)`}
        style={styles.input}
        {...{ placeholder, value, onChange }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    fontSize: 400,
  },
  label: {
    color: `rgba(${colors.primary.text}, 1)`,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    backgroundColor: `rgba(${colors.light.bg}, 1)`,
    color: `rgba(${colors.light.text}, 1)`,
    padding: 15,
    borderRadius: 2,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
});

export default Input;
