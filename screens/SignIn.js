import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Services
import authService from "services/auth.service";
// Styles
import colors from "styles/colors";

function SignIn({ navigation }) {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleInput = (e, name) => {
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const onSubmit = async () => {
    const response = await authService.signIn(values.email, values.password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View style={styles.inputCont}>
        <Input
          name="email"
          value={values.email}
          onChange={handleInput}
          label="Email"
          placeholder="Write your email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputCont}>
        <Input
          name="password"
          value={values.password}
          onChange={handleInput}
          label="Password"
          placeholder="Password"
          keyboardType="phone-pad"
          secureTextEntry
        />
      </View>
      <Button onPress={onSubmit} text="Log In" />
      <Text style={styles.text}>
        You don't have an account?{" "}
        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          style={styles.strongText}
        >
          <Text>Sign Up</Text>
        </Pressable>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "4rem",
    paddingHorizontal: "2rem",
  },
  header: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  inputCont: { marginBottom: "2rem" },
  text: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: "1rem",
    fontWeight: "500",
    marginTop: "1rem",
  },
  strongText: {
    color: `rgba(${colors.primary.bg}, 1)`,
    fontWeight: "600",
  },
});

export default SignIn;
