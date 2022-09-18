import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
// Components
import Button from "components/Button";
// Icons
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHome, AiOutlineForm } from "react-icons/ai";
// Styles
import colors from "styles/colors";

function Options({ options, setShow, navigation }) {
  return options.map((op) => {
    const Icon = op.icon;
    const handlePress = () => {
      navigation.navigate(op.screen);
      setShow(false);
    };

    return (
      <Pressable
        key={op.text}
        onPress={handlePress}
        style={optionsStyles.button}
      >
        <Icon style={optionsStyles.icon} />
        <Text style={optionsStyles.text}>{op.text}</Text>
      </Pressable>
    );
  });
}

const optionsStyles = StyleSheet.create({
  button: {
    color: `rgba(${colors.primary.text}, 1)`,
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { width: "2rem", height: "2rem", marginRight: "1.5rem" },
  text: { color: `rgba(${colors.primary.text}, 1)`, fontSize: "1.5rem" },
});

function Menu({ show, setShow, navigation }) {
  // options
  const options = [
    { icon: AiOutlineHome, text: "Home", screen: "Home" },
    { icon: AiOutlineForm, text: "Technician Absence", screen: "TechAbsence" },
  ];

  return (
    <Modal
      animationType="slide"
      visible={show}
      onRequestClose={() => setShow((prev) => !prev)}
    >
      <View style={styles.container}>
        <Pressable style={styles.arrowIcon} onPress={() => setShow(false)}>
          <BsArrowLeft style={styles.arrowIcon} />
        </Pressable>
        <View style={styles.wrapper}>
          <Options {...{ options, setShow, navigation }} />
        </View>
        <Button onPress={() => console.log("hello")} text="Log Out" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    padding: "2rem",
  },
  arrowIcon: {
    width: "2rem",
    height: "2rem",
    color: `rgba(${colors.primary.bg}, 1)`,
  },
  wrapper: {
    marginTop: "4rem",
    marginBottom: "2rem",
    minHeight: "24rem",
  },
});

export default Menu;
