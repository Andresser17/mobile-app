import { View, Text, TextInput, StyleSheet } from "react-native";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Styles
import colors from "styles/colors";

function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View style={styles.inputCont}>
        <Input label="Email" placeholder="Write your email" />
      </View>
      <View style={styles.inputCont}>
        <Input label="Password" placeholder="Password" />
      </View>
      <Button onPress={() => {}} text="Log In" />
      <Text style={styles.text}>
        You don't have an account?{" "}
        <Text style={styles.strongText}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "4rem",
  },
  header: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  inputCont: { width: "18rem", marginBottom: "2rem" },
  text: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: "1rem",
    fontWeight: "500",
    marginTop: "1rem"
  },
  strongText: {
    color: `rgba(${colors.primary.bg}, 1)`,
    fontWeight: "600",
  }
});

export default SignIn;
