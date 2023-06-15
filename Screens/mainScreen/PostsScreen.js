import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { PostCard } from "../../components/PostCard";

export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  // console.log("route", route);
  // console.log("route.params", route.params);
  return (
    <View style={styles.container}>
      {/* <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: 350, height: 200 }}
              />
            </View>
          )}
        /> */}

      <FlatList
        style={{ backgroundColor: "red" }}
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32, backgroundColor: "green" }}>
            <PostCard postInfo={item} />
          </View>
        )}
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
