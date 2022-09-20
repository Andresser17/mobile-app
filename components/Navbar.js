import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Icons
import IonIcon from "react-native-vector-icons/Ionicons";
import FontIcon from "react-native-vector-icons/FontAwesome";
// Styles
import colors from "styles/colors";
// Modals
import Menu from "modals/Menu";

function Navbar({ navigation, route, options, back }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowMenu(true)}>
        <IonIcon name="menu" size={48} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("open menu")}>
        <FontIcon name="user-circle" size={48} style={styles.icon} />
      </TouchableOpacity>
      <Menu show={showMenu} setShow={setShowMenu} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    paddingTop: 48,
    paddingHorizontal: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    color: `rgba(${colors.primary.text}, 1)`,
  },
});

export default Navbar;
