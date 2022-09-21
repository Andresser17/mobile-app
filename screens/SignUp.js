import { useState, useContext } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Store
import { AuthContext } from "store/auth";
// Services
import authService from "services/auth.service";
// Styles
import colors from "styles/colors";

function SignUp({ navigation }) {
  const [values, setValues] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const { signUp } = useContext(AuthContext);

  const handleInput = (e, name) => {
    setValues((prev) => ({ ...prev, [name]: e.nativeEvent.text }));
  };

  const onSubmit = async () => {
    const response = await authService.signUp(
      values.name,
      values.last_name,
      values.phone,
      values.email,
      values.password
    );

    // dispatch token to context store
    if (response.status === 200) {
      signUp(response);
      return;
    }

    alert(response.response.data.mensaje);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Create Account</Text>
        <View style={styles.inputCont}>
          <Input
            name="name"
            value={values.name}
            onChange={handleInput}
            label="Name"
            placeholder="Name"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="last_name"
            value={values["last_name"]}
            onChange={handleInput}
            label="Last Name"
            placeholder="Last Name"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="phone"
            value={values.phone}
            onChange={handleInput}
            label="Phone Number"
            placeholder="Type phone number"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="email"
            value={values.email}
            onChange={handleInput}
            label="Email"
            placeholder="Write your email"
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
        <Button onPress={onSubmit} text="Sign Up" />
        <Text style={styles.text}>
          You already have an account?{" "}
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.strongText}>Log In</Text>
          </Pressable>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default SignUp;
