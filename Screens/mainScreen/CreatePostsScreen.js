import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Camera } from "expo-camera";

export default function CreatePostsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity style={styles.cameraTouchButton}>
          <Image
            source={require("../../assets/icons/camera-black.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,

    // justifyContent: "center",
    // alignItems: "center",
  },
  camera: {
    height: 240,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },

  cameraTouchButton: {
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  //   text: {
  //     marginTop: 16,
  //     textAlign: "center",
  //     fontSize: 16,
  //     fontFamily: "Roboto-Regular",
  //   },
});
