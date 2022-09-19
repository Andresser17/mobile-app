import axios from "axios";
// Envs
import Constants from "expo-constants";
const { API_URL } = Constants.manifest.extra;

async function signIn(email, password) {
  const response = await axios.post(`${API_URL}/signin/`, { email, password });
}

async function signUp(email, password) {
  console.log(email,password);
  const response = await axios.post(`${API_URL}/signup/`, { email, password });
  console.log(response);
}

const auth = {
  signIn,
  signUp,
};

export default auth;
