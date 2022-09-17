import { View, TouchableOpacity, StyleSheet } from "react-native";
// Icons
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi";
// Styles
import colors from "styles/colors";

function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <BiMenuAltLeft style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <BiUserCircle style={styles.userIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: "2rem",
    paddingHorizontal: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    color: `rgba(${colors.primary.text}, 1)`,
    width: "2.5rem",
    height: "2.5rem",
  },
  userIcon: {
    color: `rgba(${colors.primary.text}, 1)`,
    width: "2.5rem",
    height: "2.5rem",
  },
});

export default Navbar;
