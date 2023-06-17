import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
// import { store } from "../redux/store";
import { auth } from "../firebase/config";

const Main = () => {
  const [user, setUser] = useState(null);
  const state = useSelector((state) => state);
  console.log("state", state);
  onAuthStateChanged(auth, (user) => {
    // console.log("user change", user);
    setUser(user);
  });

  const routing = useRoute(user);
  useEffect(() => {}, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
