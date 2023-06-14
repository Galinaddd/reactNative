import { Text, Image, View, StyleSheet } from "react-native";

export function PostCard({ postInfo }) {
  return (
    <View>
      <Image style={styles.image} source={{ uri: postInfo.photo }} />
      <Text style={styles.nameText}>{postInfo.place}</Text>
      <View style={styles.details}>
        <View style={styles.comments}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/icons/message-circle.png")}
          />
          <Text style={{}}>0</Text>
        </View>
        <View style={styles.map}>
          <Image />
          <Text style={styles.placeText}>{postInfo.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 240,
    borderRadius: 8,
  },
  nameText: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  placeText: {},
});
