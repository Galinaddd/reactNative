import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider, useSelector } from "react-redux";

import { store } from "./redux/store";
import { auth } from "./firebase/config";
import Main from "./components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    console.log("something is wrong");
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

// auth
