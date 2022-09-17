import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
// Icons
import { IoMdOptions } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
// Components
import Button from "components/Button";
import Input from "components/Input";
// Styles
import colors from "styles/colors";

const DATA = [
  {
    id: 1,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
  {
    id: 2,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
  {
    id: 3,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
  {
    id: 5,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
  {
    id: 6,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
  {
    id: 7,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
  {
    id: 8,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
  {
    id: 9,
    created: "12-28-12",
    status: 0,
    technician: "John Doe",
    technology: "UTP",
  },
];

function Order({ data }) {
  return (
    <View style={OrdersStyles.container}>
      <Text style={OrdersStyles.title}>Date: {data.created}</Text>
      <Text style={OrdersStyles.subtitle}>Status: {data.status}</Text>
      <View style={OrdersStyles.techContainer}>
        <Text style={OrdersStyles.techText}>{data.technician}</Text>
        <Text style={OrdersStyles.techText}>{data.technology}</Text>
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
  const { colors } = useTheme();
  const renderItem = ({ item }) => <Order data={item} />;

  return (
    <View style={{ backgroundColor: colors.background, ...styles.container }}>
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
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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