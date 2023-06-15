import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { PostCard } from "../../components/PostCard";

export default function DefaultScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);
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
