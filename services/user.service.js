import axios from "axios";
import * as SecureStore from "expo-secure-store";
// Envs
import Constants from "expo-constants";
const { API_URL } = Constants.manifest.extra;

async function getOrders() {
  try {
    // get token from SecureStore
    const userToken = await SecureStore.getItemAsync("userToken");
    // set token in request header
    axios.defaults.headers.common["Authorization"] = `token ${userToken}`;
    const response = await axios.get(`${API_URL}/os/`);

    return response;
  } catch (e) {
    console.log(e.message);
    return e;
  }
}

async function getOrderDetails(orderId) {
  try {
    // get token from SecureStore
    const userToken = await SecureStore.getItemAsync("userToken");
    // set token in request header
    axios.defaults.headers.common["Authorization"] = `token ${userToken}`;
    const response = await axios.get(`${API_URL}/os/${orderId}/`);

    return response;
  } catch (e) {
    console.log(e.message);
    return e;
  }
}

async function registerTech(name, last_name, birthday) {
  // name = "Alejandro";
  // last_name = "Serrano";
  // birthday = "2022-12-21";
  const idNumber = `${name.slice(0, 2)}${last_name.slice(0, 2)}${birthday}`;

  try {
    // get token from SecureStore
    const userToken = await SecureStore.getItemAsync("userToken");
    // set token in request header
    axios.defaults.headers.common["Authorization"] = `token ${userToken}`;
    const response = await axios.post(`${API_URL}/technician/`, {
      name,
      last_name,
      birthday,
      status: 0,
      id_type: 0,
      id_number: idNumber,
      operator: 1,
    });

    return response;
  } catch (e) {
    console.log(e.message);
    return e;
  }
}

const user = {
  getOrders,
  getOrderDetails,
  registerTech,
};

export default user;
