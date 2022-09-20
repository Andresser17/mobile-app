import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
// Icons
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
// Components
import Input from "components/Input";
// Modals
import OrderDetails from "modals/OrderDetails";
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
    id: 4,
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
];

function Order({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={OrdersStyles.container}>
      <Text style={OrdersStyles.title}>Date: {data.created}</Text>
      <Text style={OrdersStyles.subtitle}>Status: {data.status}</Text>
      <View style={OrdersStyles.techContainer}>
        <Text style={OrdersStyles.techText}>{data.technician}</Text>
        <Text style={OrdersStyles.techText}>{data.technology}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={OrdersStyles.dotButton}
      >
        <EntypoIcon
          name="dots-three-vertical"
          size={24}
          color={`rgba(${colors.secondary.text}, 1)`}
        />
      </TouchableOpacity>
      <OrderDetails show={showModal} setShow={setShowModal} />
    </View>
  );
}

const OrdersStyles = StyleSheet.create({
  container: {
    backgroundColor: `rgba(${colors.primary.bg}, 1)`,
    position: "relative",
    padding: 16,
    marginBottom: 16,
  },
  dotButton: {
    position: "absolute",
    top: 16,
    right: 6,
  },
  title: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  subtitle: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: 12,
  },
  techContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  techText: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: 15,
  },
});

function Home() {
  const renderItem = ({ item }) => <Order data={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Welcome Back</Text>
      <Text style={styles.heading}>John Doe</Text>
      <View style={styles.wrapper}>
        <Text style={styles.ordersTitle}>Service Orders</Text>
        {/* search container */}
        <View style={styles.searchContainer}>
          <View style={styles.inputCont}>
            <Input placeholder="Search" />
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <IonIcon name="options" size={32} style={styles.settingsIcon} />
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
    flex: 1,
    minHeight: "100%",
    backgroundColor: `rgba(${colors.tertiary.bg}, 1)`,
    paddingTop: 64,
    paddingBottom: 128,
    paddingHorizontal: 32,
  },
  subtitle: {
    color: `rgba(${colors.primary.text}, 0.7)`,
    fontSize: 24,
    fontWeight: "500",
  },
  heading: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 48,
  },
  wrapper: { flex: 1 },
  ordersTitle: {
    color: `rgba(${colors.primary.text}, 1)`,
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  searchContainer: {
    marginBottom: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputCont: { flex: 1 },
  settingsButton: {
    marginLeft: 16,
  },
  settingsIcon: {
    color: `rgba(${colors.primary.text}, 1)`,
  },
});

export default Home;
