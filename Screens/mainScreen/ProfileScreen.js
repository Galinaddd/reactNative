import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="signOut"
        onPress={() => {
          console.log("press on sign out");
          signOut(auth);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
