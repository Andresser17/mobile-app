import { useState, useEffect } from "react";
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
// Services
import userService from "services/user.service";
// Styles
import colors from "styles/colors";

function Order({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={OrderStyles.container}>
      <View style={OrderStyles.titleCont}>
        <Text style={OrderStyles.title}>Creation Date:</Text>
        <Text style={OrderStyles.title}>{data.created}</Text>
      </View>
      <Text style={OrderStyles.subtitle}>Status: {data.status}</Text>
      <View style={OrderStyles.techContainer}>
        <Text style={OrderStyles.techText}>
          Technician ID: {data.technician}
        </Text>
        <Text style={OrderStyles.techText}>Tech: {data.technology}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={OrderStyles.dotButton}
      >
        <EntypoIcon
          name="dots-three-vertical"
          size={24}
          color={`rgba(${colors.secondary.text}, 1)`}
        />
      </TouchableOpacity>
      <OrderDetails data={data} show={showModal} setShow={setShowModal} />
    </View>
  );
}

const OrderStyles = StyleSheet.create({
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
  titleCont: {
    marginBottom: 2,
  },
  title: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    color: `rgba(${colors.secondary.text}, 1)`,
    fontSize: 14,
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

function Home({ onLayout }) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const renderItem = ({ item }) => <Order data={item} />;

  // get orders
  useEffect(() => {
    const getOrders = async () => {
      if (orders.length === 0 && error === null) {
        const response = await userService.getOrders();

        if (response.status === 200) {
          setOrders(response.data);
          return;
        }

        // if failed request, set error
        setError({
          status: response.status,
          message: response.response.data.mensaje,
        });
      }
    };

    getOrders();
  }, [orders, error]);

  return (
    <View {...{ onLayout }} style={styles.container}>
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
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.ID}
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
