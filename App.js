import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

// import image from "./assets/images/BG.jpg";

export default function App() {
  const routing = useRoute({});

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    console.log("something is wrong");
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}

// auth
