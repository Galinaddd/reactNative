import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { collection, query, onSnapshot, getDocs } from "firebase/firestore";

import { db, storage, auth } from "../../firebase/config";
import { PostCard } from "../../components/PostCard";

export default function DefaultScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const updatingPosts = [];
    const q = query(collection(db, "posts"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // console.log("1      querySnapshot  ", querySnapshot);

      querySnapshot.forEach((doc) => {
        // console.log(" 2....doc  ", doc.data());
        updatingPosts.push(doc.data());
      });
    });
    // console.log("3.......unsubscribe is  ", unsubscribe);
    // console.log("4.......updatingPosts is  ", updatingPosts);
    setPosts(updatingPosts);

    // const unsub = onSnapshot(doc(db, "posts"), (doc) => {
    //   console.log("Current data: ", doc.data());
    // });
    // setPosts(unsub);

    // it is good but not uddate posts
    // const querySnapshot = await getDocs(collection(db, "posts"));

    // // console.log("querySnapshot", querySnapshot);
    // querySnapshot.forEach((doc) => {
    //   updatingPosts.push(doc.data());
    // });
    // console.log("updatingPosts", updatingPosts);
    // setPosts(updatingPosts);
  };

  // getAllPosts();
  useEffect(() => {
    console.log("useffect in defaultscreen");
    getAllPosts();
  }, []);

  console.log("posts", posts);
  console.log("navigation", navigation);

  const handleRedirect = (screen) => navigation.navigate(screen);

  return (
    <View style={styles.container}>
      <FlatList
        style={{}}
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
            <PostCard postInfo={item} redirect={handleRedirect} />
          </View>
        )}
        decelerationRate={0.5}
      />
      <Text>PostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
});
