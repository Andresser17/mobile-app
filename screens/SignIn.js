import { useState, useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Store
import { AuthContext } from "store/auth";
// Services
import authService from "services/auth.service";
// Styles
import colors from "styles/colors";

function SignIn({ navigation }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const { signIn } = useContext(AuthContext);

  const handleInput = (e, name) => {
    setValues((prev) => ({ ...prev, [name]: e.nativeEvent.text }));
  };

  const onSubmit = async () => {
    const response = await authService.signIn(values.email, values.password);

    // dispatch token to context store
    if (response.status === 200) {
      signIn(response);
      return;
    }

    alert(response.response.data.mensaje);
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
          secureTextEntry={true}
        />
      </View>
      <Button onPress={onSubmit} text="Log In" />
      <Text style={styles.text}>
        You don't have an account?{" "}
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.strongText}>Sign Up</Text>
        </Pressable>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    paddingTop: 64,
    paddingHorizontal: 32,
  },
  header: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 32,
  },
  inputCont: { marginBottom: 32 },
  text: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 16,
  },
  strongText: {
    color: `rgba(${colors.primary.bg}, 1)`,
    fontWeight: "600",
  },
});

export default SignIn;
