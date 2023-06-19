import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import { useSelector, useDispatch } from "react-redux";

import { authStateChangeUser } from "../redux/auth/authOperation";

const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const stateRedux = useSelector((state) => state);
  console.log("stateRedux", stateRedux);
  const dispatch = useDispatch();

  const routing = useRoute(stateChange);
  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
