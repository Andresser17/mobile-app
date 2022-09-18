import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Components
import Navbar from "components/Navbar";
// Screens
import Home from "screens/Home";
import SignIn from "screens/SignIn";
import SignUp from "screens/SignUp";
import RegisterTech from "screens/RegisterTech";
import TechAbsence from "screens/TechAbsence";
// Styles
import colors from "styles/colors";

// init navigation
const Stack = createNativeStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    background: `rgba(${colors.tertiary.bg}, 1)`,
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
        <Stack.Screen name="TechAbsence" component={TechAbsence} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
