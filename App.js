import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import image from "./assets/images/BG.jpg";

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <Text style={styles.header}>Реєстрація</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#bdbdbd"
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#bdbdbd"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry
              placeholderTextColor="#bdbdbd"
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
              <Text style={styles.buttonTitle}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
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
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 35.16,
  },
  input: {
    color: "#212121",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    height: 40,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 43,
  },
  buttonTitle: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    marginTop: 16,
    marginBottom: 78,
    textAlign: "center",
    fontSize: 16,
  },
});
