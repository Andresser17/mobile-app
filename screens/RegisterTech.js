import { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
// Components
import Navbar from "components/Navbar";
import Button from "components/Button";
import Input from "components/Input";
// Services
import userService from "services/user.service";
// Styles
import colors from "styles/colors";

function RegisterTech() {
  const [values, setValues] = useState({
    name: "",
    last_name: "",
    birthday: "",
    status: "",
    id_type: "",
    id_number: "",
  });

  const handleInput = (e, name) => {
    setValues((prev) => ({ ...prev, [name]: e.nativeEvent.text }));
  };

  const onSubmit = async () => {
    const response = await userService.registerTech(
      values.name,
      values.last_name,
      values.birthday,
      values.status,
      values.id_type,
      values.id_number
    );

    if (response.status === 201) {
      alert("Technician Created");

      // clear form
      setValues({
        name: "",
        last_name: "",
        birthday: "",
        status: "",
        id_type: "",
        id_number: "",
      });
      return;
    }

    alert("Request Error");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Register a Technician</Text>
        <View style={styles.inputCont}>
          <Input
            name="name"
            value={values.name}
            onChange={handleInput}
            label="Name"
            placeholder="50 characters maximum"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="last_name"
            value={values.last_name}
            onChange={handleInput}
            label="Last Name"
            placeholder="50 characters maximum"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="birthday"
            value={values.birthday}
            onChange={handleInput}
            label="Birthday"
            placeholder="YYYY-MM-DD"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="status"
            value={values.status}
            onChange={handleInput}
            label="Status"
            placeholder="Enter a number between 0 and 1"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="id_type"
            value={values.id_type}
            onChange={handleInput}
            label="Id Type"
            placeholder="Enter a number between 0 and 1"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="id_number"
            value={values.id_number}
            onChange={handleInput}
            label="Id Number"
            placeholder="15 characters maximum"
          />
        </View>
        <Button onPress={onSubmit} text="Register" />
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
    paddingBottom: 128,
    paddingHorizontal: 32,
  },
  heading: {
    width: 192,
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 32,
  },
  inputCont: { marginBottom: 32 },
});

export default RegisterTech;
