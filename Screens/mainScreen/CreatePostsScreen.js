import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

const initialState = {
  name: "",
  place: "",
};

export default function CreatePostsScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [state, setState] = useState(initialState);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const takePhoto = async () => {
    // console.log("snap", camera);
    const photo = await camera.takePictureAsync();

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
    // const location = await Location.getCurrentPositionAsync();
    console.log("location", location);
    setLocation(location.coords);

    setPhoto(photo.uri);
  };
  const publishPost = () => {
    console.log("publishing");
    console.log("navigation", navigation);
    keyboardHide();
    const newPost = { ...state, photo, location };
    console.log("newPost", newPost);
    navigation.navigate("DefaultScreen", newPost);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "position"}
      >
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} ref={setCamera}>
            {photo && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: photo }}
                  style={{ width: 100, height: 75 }}
                />
              </View>
            )}

            <TouchableOpacity
              style={styles.cameraTouchButton}
              onPress={takePhoto}
            >
              <Image
                source={require("../../assets/icons/camera-black.png")}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          </Camera>
        </View>
        <Text style={styles.text}>Завантажте фото</Text>

        <TextInput
          style={styles.input}
          placeholder="Назва..."
          name="Name"
          placeholderTextColor="#bdbdbd"
          value={state.name}
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
            setState((prevState) => ({ ...prevState, name: value }))
          }
        />
        <TextInput
          style={{ ...styles.input, paddingLeft: 32 }}
          placeholder="Місцевість..."
          name="Place"
          placeholderTextColor="#bdbdbd"
          value={state.place}
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
            setState((prevState) => ({ ...prevState, place: value }))
          }
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={publishPost}
        >
          <Text style={styles.buttonTitle}>Опублікувати</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 43,
    paddingHorizontal: 16,

    // justifyContent: "flex-end",
    // alignItems: "center",
  },
  cameraContainer: {
    // flex: 1,
    height: 240,
    backgroundColor: "red",
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    // borderRadius: 10,

    // backgroundColor: "#FF6C00",
  },

  takePhotoContainer: {
    position: "absolute",
    top: 20,
    left: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },

  cameraTouchButton: {
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 33,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputFocused: {
    backgroundColor: "#ffffff",
    borderColor: "#FF6C00",
  },
  text: {
    marginTop: 8,
    // textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  button: {
    marginTop: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    // marginBottom: 194,
  },
  buttonTitle: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
