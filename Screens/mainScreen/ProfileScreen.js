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
import { authSignOutUser } from "../../redux/auth/authOperation";

import { useSelector, useDispatch } from "react-redux";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();

  const signOut = () => {
    // console.log("click on sign out");
    dispatch(authSignOutUser());
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button title="signOut" onPress={() => signOut()} />
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
