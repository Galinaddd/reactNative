import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreen from "../nested/DefaultScreen";
import MapScreen from "../nested/MapScreen";
// import CommentsScreen from "../nested/CommentsScreen";
import CommentsScreen from "../nested/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen name="DefaultScreen" component={DefaultScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
