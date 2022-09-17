import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// Screens
import SignIn from "screens/SignIn";
import SignUp from "screens/SignUp";
import RegisterTech from "screens/RegisterTech";
// Images
import logo from "./assets/logo.png";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
