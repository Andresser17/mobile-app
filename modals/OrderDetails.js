import {
  Modal,
  View,
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
// Icons
import AntIcon from "react-native-vector-icons/AntDesign";
// Styles
import colors from "styles/colors";

const OrderDetails = ({ data, show, setShow }) => {
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
        <ScrollView style={styles.wrapper}>
          <Text style={styles.text}>Id: {data.ID}</Text>
          <Text style={styles.text}>Deleted: {data.deleted}</Text>
          <Text style={styles.text}>Created: {data.created}</Text>
          <Text style={styles.text}>Updated: {data.updated}</Text>
          <Text style={styles.text}>Status: {data.status}</Text>
          <Text style={styles.text}>Technology: {data.technology}</Text>
          <Text style={styles.text}>Plan: {data.plan}</Text>
          <Text style={styles.text}>User Id: {data["user_id"]}</Text>
          <Text style={styles.text}>
            Scheduled Date Init: {data["scheduled_date_init"]}
          </Text>
          <Text style={styles.text}>Creator: {data.creator}</Text>
          <Text style={styles.text}>Updater: {data.updater}</Text>
          <Text style={styles.text}>Technician: {data.technician}</Text>
          <Text style={styles.text}>OS Type: {data.ostype}</Text>
          <Text style={styles.text}>Category: {data.category}</Text>
          <Text style={styles.text}>Operator: {data.operator}</Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    padding: 16,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    color: `rgba(${colors.primary.bg}, 1)`,
  },
  wrapper: {
    flex: 1,
    marginTop: 32,
  },
  text: {
    color: `rgba(${colors.tertiary.text}, 1)`,
    fontSize: 24,
    marginBottom: 16,
  },
});

export default OrderDetails;
