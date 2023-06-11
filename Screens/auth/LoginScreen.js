import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import image from "../../assets/images/BG.jpg";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  // const [dimensions, setDimensions] = useState(
  //   Dimensions.get("window").width - 30 * 2
  // );
  // const [isReady, setIsReady] = useState(false);
  // console.log(Platform.OS);

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width;
  //     // setDimensions(width);
  //     // console.log(width);
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  //   console.log("keyboard", Keyboard.isVisible());

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: "flex-end" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formContainer,

                // width: dimensions,
              }}
            >
              <Text style={styles.header}>Увійти</Text>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyBoard ? -97 : 144,
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#bdbdbd"
                  value={state.email}
                  onFocus={() => {
                    setIsShowKeyBoard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <View style={{ position: "relative" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry
                    placeholderTextColor="#bdbdbd"
                    value={state.password}
                    onFocus={() => {
                      setIsShowKeyBoard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <Text style={styles.passwordViewText}>
                    Показати/приховати
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.7}
                  onPress={keyboardHide}
                >
                  <Text style={styles.buttonTitle}>Увійти</Text>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Немає акаунту? </Text>
                  <Text
                    style={{ ...styles.text, textDecorationLine: "underline" }}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    Зареєструватися
                  </Text>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  header: {
    marginTop: 32,
    marginBottom: 33,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 35.16,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 30,
  },

  input: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  passwordViewText: {
    position: "absolute",
    top: 16,
    right: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  form: {
    // marginBottom: 144,
  },
  button: {
    marginTop: 27,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonTitle: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  text: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
