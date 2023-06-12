import React, { useState, useEffect } from "react";
import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";

import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        headerStyle: {
          height: 88,
        },
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          lineHeight: 22,

          textAlign: "center",
          letterSpacing: -0.408,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
          paddingHorizontal: 81,
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
        },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",

          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/icons/grid.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/icons/new.png")}
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/icons/user.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
