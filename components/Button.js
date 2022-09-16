import { StyleSheet, Text, TouchableOpacity } from "react-native";
// Styles
import colors from "styles/colors";

function Button({ onPress, text = "" }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: `rgba(${colors.primary.bg}, 1)`,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: `rgba(${colors.primary.text}, 1)`,
  },
});

export default Button;
