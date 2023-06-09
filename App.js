import React, { useEffect, useState } from "react";
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

import image from "./assets/images/BG.jpg";

const initialState = {
  login: "",
  email: "",
  password: "",
};

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    console.log("something is wrong");
    return null;
  }

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width;
  //     console.log(width);
  //     Dimensions.addEventListener("change", onChange);
  //   };
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  const [state, setState] = useState(initialState);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  // const [isReady, setIsReady] = useState(false);
  // console.log(Platform.OS);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  // if (!isReady) {
  //   return (
  //     <Apploading
  //       startAsync={loadApplication}
  //       onFinish={() => {
  //         setIsReady(true);
  //       }}
  //       onerror={console.warn}
  //     />
  //   );
  // }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View
            style={{
              ...styles.formContainer,
              // marginTop: isShowKeyBoard ? 174 : 268,
            }}
          >
            <Text style={styles.header}>Реєстрація</Text>
            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <View
                  style={{
                    ...styles.inputsContainer,
                    marginBottom: isShowKeyBoard ? 32 : 43,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Логін"
                    placeholderTextColor="#bdbdbd"
                    value={state.login}
                    onFocus={() => {
                      setIsShowKeyBoard(true);
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
                    onFocus={() => {
                      setIsShowKeyBoard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
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
                </View>
              </KeyboardAvoidingView>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={keyboardHide}
              >
                <Text style={styles.buttonTitle}>Зареєстуватися</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
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
    marginTop: 92,
    marginBottom: 33,
    color: "#212121",
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 35.16,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 30,
    fontFamily: "Roboto_400Regular",
    fontWeight: 400,
  },
  inputsContainer: {},
  input: {
    color: "#212121",
    fontSize: 16,
    // fontFamily: "Roboto_400Regular",
    // fontWeight: 400,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    height: 40,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  form: {},
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonTitle: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    // fontFamily: "Roboto_400Regular",
    // fontWeight: 400,
  },
  text: {
    marginTop: 16,
    marginBottom: 78,
    textAlign: "center",
    fontSize: 16,
    // fontFamily: "Roboto_400Regular",
    // fontWeight: 400,
  },
});
