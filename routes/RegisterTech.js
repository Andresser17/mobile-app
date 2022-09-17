import { View, Text, StyleSheet } from "react-native";
// Components
import Navbar from "components/Navbar";
import Button from "components/Button";
import Input from "components/Input";
// Styles
import colors from "styles/colors";

function RegisterTech() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register a Technician</Text>
      <View style={styles.inputCont}>
        <Input label="Name" placeholder="Name" />
      </View>
      <View style={styles.inputCont}>
        <Input label="Last Name" placeholder="Last Name" />
      </View>
      <View style={styles.inputCont}>
        <Input label="Birthday" placeholder="Birthday" />
      </View>
      <View style={styles.inputCont}>
        <Input label="Status" placeholder="Status" />
      </View>
      <Button onPress={() => {}} text="Register" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "4rem",
  },
  header: {
    width: "12rem",
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  inputCont: { width: "18rem", marginBottom: "2rem" },
});

export default RegisterTech;
