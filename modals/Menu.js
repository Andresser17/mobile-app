import { useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
// Components
import Button from "components/Button";
// Icons
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
// Store
import { AuthContext } from "store/auth";
// Services
import authService from "services/auth.service.js";
// Styles
import colors from "styles/colors";

function Options({ options, setShow, navigation }) {
  return options.map((op) => {
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
        {op.icon}
        <Text style={optionsStyles.text}>{op.text}</Text>
      </Pressable>
    );
  });
}

const optionsStyles = StyleSheet.create({
  button: {
    color: `rgba(${colors.primary.text}, 1)`,
    marginBottom: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginRight: 24 },
  text: { color: `rgba(${colors.primary.text}, 1)`, fontSize: 24 },
});

function Menu({ show, setShow, navigation }) {
  const { signOut } = useContext(AuthContext);
  // options
  const options = [
    {
      icon: (
        <AntIcon
          name="home"
          size={32}
          style={{ marginRight: 16, color: `rgba(${colors.primary.text}, 1)` }}
        />
      ),
      text: "Home",
      screen: "Home",
    },
    {
      icon: (
        <MaterialIcon
          name="form-select"
          size={32}
          style={{ marginRight: 16, color: `rgba(${colors.primary.text}, 1)` }}
        />
      ),
      text: "Register Technician",
      screen: "RegisterTech",
    },
    {
      icon: (
        <AntIcon
          name="form"
          size={32}
          style={{ marginRight: 16, color: `rgba(${colors.primary.text}, 1)` }}
        />
      ),
      text: "Technician Absence",
      screen: "TechAbsence",
    },
  ];

  const handleSignOut = async () => {
    const response = await authService.signOut();

    // remove token from store
    signOut();
  };

  return (
    <Modal
      animationType="slide"
      visible={show}
      onRequestClose={() => setShow((prev) => !prev)}
    >
      <View style={styles.container}>
        <Pressable style={styles.arrowIcon} onPress={() => setShow(false)}>
          <AntIcon name="arrowleft" size={32} style={styles.arrowIcon} />
        </Pressable>
        <View style={styles.wrapper}>
          <Options {...{ options, setShow, navigation }} />
        </View>
        <Button onPress={handleSignOut} text="Log Out" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    padding: 32,
  },
  arrowIcon: {
    color: `rgba(${colors.primary.bg}, 1)`,
  },
  wrapper: {
    marginTop: 64,
    marginBottom: 32,
    minHeight: 384,
  },
});

export default Menu;
