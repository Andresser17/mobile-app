import React, { useState, useEffect, useReducer } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
// Components
import Navbar from "components/Navbar";
// Screens
import Home from "screens/Home";
import SignIn from "screens/SignIn";
import SignUp from "screens/SignUp";
// import RegisterTech from "screens/RegisterTech";
// import TechAbsence from "screens/TechAbsence";
// Store
import { AuthContext, authReducer, authActions } from "store/auth";
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
  const [state, dispatch] = useReducer(authReducer, {
    isLogged: false,
    userToken: null,
    isLoading: false,
  });

  // useEffect(() => {
  //   // Fetch the token from storage then navigate to our appropriate place
  //   const bootstrapAsync = async () => {
  //     let userToken;

  //     try {
  //       userToken = await SecureStore.getItemAsync("userToken");
  //     } catch (e) {
  //       // Restoring token failed
  //     }
  //     console.log({userToken});
  //     dispatch({ type: "RESTORE_TOKEN", token: userToken });
  //   };

  //   bootstrapAsync();
  // }, []);

  const authContext = React.useMemo(authActions, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <Navbar {...props} />,
          }}
        >
          {false ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              {/* <Stack.Screen name="RegisterTech" component={RegisterTech} /> */}
              {/* <Stack.Screen name="TechAbsence" component={TechAbsence} /> */}
            </>
          ) : (
            <>
              <Stack.Screen
                options={{ header: () => null }}
                name="SignIn"
                component={SignIn}
              />
              <Stack.Screen
                options={{ header: () => null }}
                name="SignUp"
                component={SignUp}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
