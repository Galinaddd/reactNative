import { Text, Image, View, StyleSheet } from "react-native";

export function PostCard({ postInfo, styleItem }) {
  return (
    <View style={styleItem}>
      <Image style={styles.image} source={{ uri: postInfo.photo }} />
      <Text style={styles.nameText}>{postInfo.place}</Text>
      <View style={styles.details}>
        <View style={styles.comments}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/icons/message-circle.png")}
          />
          <Text style={styles.commentText}>0</Text>
        </View>
        <View style={styles.map}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/icons/map-pin.png")}
          />
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
    marginVertical: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  comments: { flexDirection: "row" },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginLeft: 6,
  },
  map: { flexDirection: "row" },

  placeText: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: " #212121",
  },
});
