import axios from "axios";
import * as SecureStore from "expo-secure-store";
// Envs
import Constants from "expo-constants";
const { API_URL } = Constants.manifest.extra;
const token = "6fb7c6abe81b0699b4f5d9409c0b88f003895968";

async function signIn(email, password) {
  // const response = await axios.post(`${API_URL}/signin/`, { email, password });

  // save token in SecureStore
  await SecureStore.setItemAsync("userToken", token);

  return token;
}

async function signUp(email, password) {
  // const response = await axios.post(`${API_URL}/signup/`, { email, password });

  // save token in SecureStore
  await SecureStore.setItemAsync("userToken", token);

  return token;
}

async function signOut() {
  // const response = await axios.post(`${API_URL}/signout/`);

  // remove token store SecureStore
  await SecureStore.deleteItemAsync("userToken");
}

const auth = {
  signIn,
  signUp,
  signOut,
};

export default auth;
