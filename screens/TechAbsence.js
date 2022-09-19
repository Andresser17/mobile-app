import { View, StyleSheet } from "react-native";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Styles
import colors from "styles/colors";

const TechAbsence = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <Input
          label="Register technician Absence"
          placeholder="Enter technician ID"
        />
      </View>
      <Button text="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    padding: 32,
  },
  inputCont: {
    marginTop: 32,
    marginBottom: 24,
  },
});

export default TechAbsence;
