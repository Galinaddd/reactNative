import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";

// import { useFonts } from "expo-font";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";

// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_500Medium,
//   Roboto_700Bold,
// } from "@expo-google-fonts/roboto";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };

const Stack = createStackNavigator();

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  // const [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Roboto_700Bold,
  // });

  // if (!fontsLoaded) {
  //   console.log("something is wrong");
  //   return null;
  // }

  // const a = Object.assign({}, fontsLoaded);
  // if (!a) {
  //   console.log("something is wrong");
  //   return null;
  // }

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
