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
  Button,
} from "react-native";
import { useDispatch } from "react-redux";

import { authSignUpUser } from "../../redux/auth/authOperation";

import image from "../../assets/images/BG.jpg";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const dispatch = useDispatch();

  let containerMarginbottom;
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
  // useEffect(() => {
  //   containerMarginbottom = isShowKeyBoard ? -97 : 78;
  // }, [isShowKeyBoard]);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    // console.log("state in register page");
    setState(initialState);
  };

  const handleSubmit = () => {
    // console.log("it is handlesubmit in register");
    keyboardHide();
    dispatch(authSignUpUser(state));
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          {/* <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: "flex-end" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          > */}
          <View
            style={{
              ...styles.formContainer,
              // width: dimensions,
              // marginBottom: containerMarginbottom,
            }}
          >
            <Text style={styles.header}>Реєстрація</Text>
            <View
              style={{
                ...styles.form,
                // marginBottom: isShowKeyBoard ? -97 : 78,
                // marginBottom: containerMarginbottom,
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Логін"
                name="login"
                placeholderTextColor="#bdbdbd"
                value={state.login}
                onFocus={(event) => {
                  setIsShowKeyBoard(true);
                  event.target.setNativeProps({
                    style: styles.inputFocused,
                  });
                }}
                onBlur={(event) => {
                  event.target.setNativeProps({
                    style: styles.input,
                  });
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#bdbdbd"
                value={state.email}
                onFocus={(event) => {
                  setIsShowKeyBoard(true);
                  event.target.setNativeProps({
                    style: styles.inputFocused,
                  });
                }}
                onBlur={(event) => {
                  event.target.setNativeProps({
                    style: styles.input,
                  });
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />

              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={isVisiblePassword ? false : true}
                  placeholderTextColor="#bdbdbd"
                  value={state.password}
                  onFocus={(event) => {
                    setIsShowKeyBoard(true);
                    event.target.setNativeProps({
                      style: styles.inputFocused,
                    });
                  }}
                  onBlur={(event) => {
                    event.target.setNativeProps({
                      style: styles.input,
                    });
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                <Text
                  style={styles.passwordViewText}
                  onPress={() => setIsVisiblePassword((prev) => !prev)}
                >
                  {isVisiblePassword ? "Приховати" : "Показати"}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonTitle}>Зареєстуватися</Text>
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Вже є акаунт? </Text>
                <Text
                  style={{ ...styles.text, textDecorationLine: "underline" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Увійти
                </Text>
              </View>
            </View>
          </View>
          {/* </KeyboardAvoidingView> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 78,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  header: {
    marginTop: 92,
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
  inputFocused: {
    backgroundColor: "#ffffff",
    borderColor: "#FF6C00",
  },
  //   inputBlurred: { backgroundColor: "#f6f6f6", borderColor: "#e8e8e8" },
  passwordViewText: {
    position: "absolute",
    top: 16,
    right: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  form: {},
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
