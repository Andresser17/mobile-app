import axios from "axios";
import * as SecureStore from "expo-secure-store";
// Envs
import Constants from "expo-constants";
const { API_URL } = Constants.manifest.extra;

async function signIn(email, password) {
  try {
    const response = await axios.post(`${API_URL}/signin/`, {
      email,
      password,
    });
    // save token in SecureStore
    await SecureStore.setItemAsync("userToken", response.data.token);

    return response;
  } catch (e) {
    console.log(e.message);
    return e;
  }
}

async function signUp(name, last_name, phone, email, password) {
  try {
    const response = await axios.post(`${API_URL}/signup/`, {
      name,
      last_name,
      phone,
      email,
      password,
    });

    // save token in SecureStore
    await SecureStore.setItemAsync("userToken", response.data.token);

    return response;
  } catch (e) {
    console.log(e.message);
    return e;
  }
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
