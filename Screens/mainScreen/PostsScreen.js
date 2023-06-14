import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PostsScreen({ navigation, route }) {
  console.log("route", route);
  console.log("route.params", route.params);
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});
