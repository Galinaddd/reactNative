import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { collection, query, onSnapshot, getDocs } from "firebase/firestore";

import { db, storage, auth } from "../../firebase/config";
import { PostCard } from "../../components/PostCard";

export default function DefaultScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const q = query(collection(db, "posts"));

    onSnapshot(q, (querySnapshot) => {
      const updatingPosts = [];
      querySnapshot.forEach((doc) => {
        updatingPosts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(updatingPosts);
    });
  };

  useEffect(() => {
    console.log("useffect in defaultscreen");
    getAllPosts();
  }, []);

  const handleRedirect = (screen, { location = {}, postId = null }) =>
    navigation.navigate(screen, { location, postId });

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
});
