import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as ImageManipulator from "expo-image-manipulator";
// Routes
import SignIn from "routes/SignIn";
// Images
import logo from "./assets/logo.png";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) return;

    setSelectedImage({ localUri: pickerResult.uri });
  };

  const openShareDialogAsync = async () => {
    if (Platform.OS === "web") {
      alert("Uh oh, sharing isn't available on your platform");
      return;
    }

    const imageTmp = await ImageManipulator.manipulateAsync(
      selectedImage.localUri
    );
    await Sharing.shareAsync(imageTmp.uri);
  };

  return (
    <View style={styles.container}>
      <SignIn />
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
