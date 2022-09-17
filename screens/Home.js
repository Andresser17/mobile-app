import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Icons
import { IoMdOptions } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Styles
import colors from "styles/colors";

function Orders() {
  return (
    <View style={OrdersStyles.container}>
      <Text style={OrdersStyles.title}>Created</Text>
      <Text style={OrdersStyles.subtitle}>Status</Text>
      <View style={OrdersStyles.techContainer}>
        <Text style={OrdersStyles.techText}>Technician</Text>
        <Text style={OrdersStyles.techText}>Technology</Text>
      </View>
      <TouchableOpacity style={OrdersStyles.dotButton}>
        <BsThreeDotsVertical style={OrdersStyles.dotIcon} />
      </TouchableOpacity>
    </View>
  );
}

const OrdersStyles = StyleSheet.create({
  container: {
    backgroundColor: `rgba(${colors.primary.bg}, 1)`,
    position: "relative",
    padding: "1rem",
    marginBottom: "1rem",
  },
  dotButton: {
    position: "absolute",
    top: "1rem",
    right: "0.5rem",
  },
  dotIcon: {
    width: "1.5rem",
    height: "1.5rem",
    color: `rgba(${colors.secondary.bg}, 1)`,
  },
  title: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: "1rem",
    fontWeight: 500,
    marginBottom: "0.2rem",
  },
  subtitle: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: "0.8rem",
  },
  techContainer: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  techText: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: "0.9rem",
  },
});

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Text style={styles.subtitle}>Welcome Back</Text>
        John Doe
      </Text>
      <View>
        <Text style={styles.ordersTitle}>Service Orders</Text>
        {/* search container */}
        <View style={styles.searchContainer}>
          <View style={styles.inputCont}>
            <Input placeholder="Search" />
          </View>

          <TouchableOpacity style={styles.settingsButton}>
            <IoMdOptions style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
        {/* orders */}
        <Orders />
        <Orders />
        <Orders />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "4rem",
    paddingHorizontal: "2rem",
  },
  header: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "3rem",
  },
  subtitle: {
    color: `rgba(${colors.primary.text}, 0.7)`,
    fontSize: "1.5rem",
    fontWeight: 500,
    display: "block",
  },
  ordersTitle: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  searchContainer: {
    marginBottom: "2rem",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputCont: { flex: 1 },
  settingsButton: {
    marginLeft: "1rem",
  },
  settingsIcon: {
    width: "2.5rem",
    height: "2.5rem",
    color: `rgba(${colors.primary.text}, 1)`,
  },
});

export default Home;
