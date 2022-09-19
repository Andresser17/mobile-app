import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
// Icons
import AntIcon from "react-native-vector-icons/AntDesign";
// Styles
import colors from "styles/colors";

const OrderDetails = ({ show, setShow }) => {
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
          <Text style={styles.text}>Id: 2</Text>
          <Text style={styles.text}>Deleted: false</Text>
          <Text style={styles.text}>Created: 2022-08-29</Text>
          <Text style={styles.text}>Updated: 2022-08-29</Text>
          <Text style={styles.text}>Status: 0</Text>
          <Text style={styles.text}>Technology: ONT</Text>
          <Text style={styles.text}>Plan: 20Mb</Text>
          <Text style={styles.text}>Scheduled Date Init: null</Text>
          <Text style={styles.text}>User Id: 2</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    padding: 32,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    color: `rgba(${colors.primary.bg}, 1)`,
  },
  wrapper: {
    marginTop: 32,
  },
  text: {
    color: `rgba(${colors.tertiary.text}, 1)`,
    fontSize: 24,
    marginBottom: 16,
  },
});

export default OrderDetails;
