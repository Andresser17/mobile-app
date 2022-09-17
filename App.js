import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as Sharing from "expo-sharing";
// import * as ImageManipulator from "expo-image-manipulator";
// Routes
import SignIn from "routes/SignIn";
import SignUp from "routes/SignUp";
import RegisterTech from "routes/RegisterTech";
// Images
import logo from "./assets/logo.png";

export default function App() {

  return (
    <View style={styles.container}>
      <RegisterTech />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(30, 30, 30, 1)",
    textColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
