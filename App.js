import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";

import { store } from "./redux/store";
import { auth } from "./firebase/config";

export default function App() {
  const [user, setUser] = useState(null);

  const routing = useRoute(user);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    console.log("something is wrong");
    return null;
  }

  onAuthStateChanged(auth, (user) => {
    console.log("user change", user);
    setUser(user);
    // if (user) {
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
    //   // ...
    // } else {
    //   // User is signed out
    //   // ...
    // }
  });

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}

// auth
