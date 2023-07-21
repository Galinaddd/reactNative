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
import { useSelector } from "react-redux";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { db, storage, auth } from "../../firebase/config";

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

  const { userId, login } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const takePhoto = async () => {
    // console.log("snap", camera);
    const photo = await camera.takePictureAsync();

    const location = await Location.getCurrentPositionAsync({});
    console.log("location.coords", location.coords);
    setLocation(location.coords);
    // const location = await Location.getCurrentPositionAsync();
    // console.log("location", location);
    // setLocation(location.coords);

    setPhoto(photo.uri);
  };

  const publishPost = () => {
    // console.log("publishing");
    // console.log("navigation", navigation);
    keyboardHide();
    const newPost = { ...state, photo, location };
    // console.log("newPost", newPost);
    // uploadPhotoToServer();
    uploadPostToServer();
    navigation.navigate("DefaultScreen");
  };

  const uploadPostToServer = async () => {
    const photoUrl = await uploadPhotoToServer();
    try {
      const postRef = await addDoc(collection(db, "posts"), {
        photo: photoUrl,
        name: state.name,
        place: state.place,
        location,
        userId,
        login,
        // comments,
      });
      // console.log("Document written with ID: ", postRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();
    const uniquPostId = Date.now().toString();
    try {
      const storageRef = ref(storage, `postImage/${uniquPostId}`);
      // console.log("storageRef", storageRef);
      const data = await uploadBytes(storageRef, file);
      // console.log("data", data);

      const processedPhoto = await getDownloadURL(storageRef);
      // console.log("processedPhoto", processedPhoto);
      return processedPhoto;
    } catch (error) {
      console.log("error is", error);
    }
  };

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
        <View style={{ position: "relative" }}>
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
          <Image
            style={styles.iconMapPin}
            source={require("../../assets/icons/map-pin.png")}
            onPress={() => redirect("Map")}
          />
        </View>
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
    paddingVertical: 15,
    borderBottomWidth: 1,

    borderBottomColor: "#E8E8E8",
    justifyContent: "center",
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
  iconMapPin: {
    position: "absolute",
    bottom: 15,
    left: 0,
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
