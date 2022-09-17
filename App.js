import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Components
import Navbar from "components/Navbar";
// Screens
import Home from "screens/Home";
import SignIn from "screens/SignIn";
import SignUp from "screens/SignUp";
import RegisterTech from "screens/RegisterTech";

// init navigation
const Stack = createNativeStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(33, 33, 33)",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <Navbar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="RegisterTech" component={RegisterTech} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
