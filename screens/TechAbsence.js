import { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Services
import userService from "services/user.service";
// Styles
import colors from "styles/colors";

const TechAbsence = () => {
  const [values, setValues] = useState({
    schedule_day: "",
    status: "",
    start_time: "",
    end_time: "",
  });

  const handleInput = (e, name) => {
    setValues((prev) => ({ ...prev, [name]: e.nativeEvent.text }));
  };

  const onSubmit = async () => {
    const response = await userService.techAbsence(
      values.schedule_day,
      values.status,
      values.start_time,
      values.end_time
    );

    if (response.status === 201) {
      alert("Absence Created");

      // clear form
      setValues({ schedule_day: "", status: "", start_time: "", end_time: "" });
      return;
    }

    alert("Request Error");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Register Technician Absence</Text>
        <View style={styles.inputCont}>
          <Input
            name="schedule_day"
            value={values.schedule_day}
            onChange={handleInput}
            label="Schedule Day"
            placeholder="Enter a number between 0 and 6"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="status"
            value={values.status}
            onChange={handleInput}
            label="Status"
            placeholder="Enter a number between 0 and 3"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="start_time"
            value={values.start_time}
            onChange={handleInput}
            label="Start Time"
            placeholder="HH:MM:SS"
          />
        </View>
        <View style={styles.inputCont}>
          <Input
            name="end_time"
            value={values.end_time}
            onChange={handleInput}
            label="End Time"
            placeholder="HH:MM:SS"
          />
        </View>
        <Button onPress={onSubmit} text="Submit" />
      </ScrollView>
    </View>
  );
};

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
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 32,
  },
  inputCont: {
    marginBottom: 32,
  },
});

export default TechAbsence;
