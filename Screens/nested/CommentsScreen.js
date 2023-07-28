import {
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/config";

import { getFirestore, listCollections } from "firebase/firestore";
import {
  collection,
  doc,
  arrayUnion,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  console.log("postId in comment", postId);
  const [comment, setComment] = useState("");
  const { login } = useSelector((state) => state.auth);

  const addComment = async () => {
    console.log("press on add comment");
    console.log("postId", postId);
    console.log("db", db);

    // try {
    //   const collections = await listCollections(db);
    //   const collectionNames = collections.map((collection) => collection.id);
    //   return collectionNames;
    // } catch (error) {
    //   console.log("Error getting collection names:", error);
    //   return [];
    // }

    // try {
    console.log("1");
    const ref = doc(db, "posts", postId);

    console.log("ref", ref);
    console.log("before apdate");

    await updateDoc(ref, {
      comments: arrayUnion({ login, text: comment }),
    });

    // await updateDoc(ref, {
    //   comment,
    //   login,
    // });
    console.log("document updated");
    // } catch (error) {
    //   console.log(error);
    // }
    setComment("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/BG.jpg")}
      />

      <View style={styles.commentBlock}>
        <View style={styles.comment}>
          <Image
            style={styles.avatar}
            source={require("../../assets/favicon.png")}
          />

          <View style={styles.commentTextContainer}>
            <Text style={styles.text}>
              textdfs bgsdfgsd gsdfg dsbnmbmgdsf gsd gfdsfgd sgfdsgf sdfgd
              sfgsnbmbnmbmd sdfgsdfbgs sdfgsdf gsdfgdfsgd
            </Text>
            <Text style={styles.meta}>meta</Text>
          </View>
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 0, right: 16, left: 16 }}>
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          placeholderTextColor="#BDBDBD"
          value={comment}
          // value={state.email}

          onChangeText={setComment}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 8, top: 8 }}
          onPress={addComment}
        >
          <Image
            source={require("../../assets/icons/send.png")}
            style={{
              width: 34,
              height: 34,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
    padding: 16,
  },
  image: {
    height: 240,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  commentBlock: { marginTop: 32 },
  comment: { flexDirection: "row" },
  // commentBlock: { backgroundColor: "#00ff00" },
  commentTextContainer: {
    // width: 299,
    // height: 60,
    borderRadius: 6,
    backgroundColor: "#аа0000",
    padding: 16,
  },

  text: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  meta: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    marginTop: 8,
  },
  input: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default CommentsScreen;
