import axios from "axios";
import * as SecureStore from "expo-secure-store";
// Envs
import Constants from "expo-constants";
const { API_URL } = Constants.manifest.extra;

async function signIn(email, password) {
  const response = await axios.post(`${API_URL}/signin/`, { email, password });

  // save token in SecureStore
  await SecureStore.setItemAsync("userToken", token);
}

async function signUp(email, password) {
  const response = await axios.post(`${API_URL}/signup/`, { email, password });

  // save token in SecureStore
  await SecureStore.setItemAsync("userToken", token);
}

const auth = {
  signIn,
  signUp,
};

export default auth;
