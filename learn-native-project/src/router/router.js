import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { PostsScreen } from "../screens/PostsScreen";
import { CreatePostsScreen } from "../screens/CreatePostsScreen";
import { CommentsScreen } from "../screens/CommentsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { MapScreen } from "../screens/MapScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SCREENS } from "./router.constants";
import { Logout } from "../components/Logout";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const useRouter = (isLoggedIn) => {
  if (!isLoggedIn) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SCREENS.REGISTRATION}
          component={RegistrationScreen}
        />
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTitleStyle: {},
          headerRight: ({ color, size }) => (
            <Logout />
            // <MaterialIcons
            //   name="logout"
            //   color={"red"}
            //   size={26}
            //   style={{ marginRight: 20 }}
            // />
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          // tabBarLabel: "Create posts",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="Comments" component={CommentsScreen} /> */}
      {/* <Tab.Screen name="Map" component={MapScreen} /> */}
    </Tab.Navigator>
  );
};
