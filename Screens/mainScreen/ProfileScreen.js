import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  //   View,
  //   ImageBackground,
  //   TextInput,
  //   TouchableOpacity,
  //   Platform,
  //   KeyboardAvoidingView,
  //   Keyboard,
  //   TouchableWithoutFeedback,
  //   Dimensions,
  //   Button,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
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
