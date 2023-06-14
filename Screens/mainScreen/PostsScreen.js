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
        style={{ backgroundColor: "red" }}
        data={posts}
        keyExtractor={(item, indx) => {
          indx;
        }}
        // renderItem={({ item }) => (
        //   <View style={{}}>
        //     <PostListItem />
        //   </View>
        // )}
        renderItem={({ item }) => (
          <View style={{}}>
            <PostCard postInfo={item} />
          </View>
        )}
      /> */}
      <FlatList
        style={{ backgroundColor: "red" }}
        data={posts}
        keyExtractor={(item, indx) => {
          indx.toString();
        }}
        // renderItem={({ item }) => (
        //   <View style={{}}>
        //     <PostListItem />
        //   </View>
        // )}
        renderItem={({ item }) => (
          <View style={{}}>
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
  },
});
