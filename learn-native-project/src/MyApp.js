import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { useRouter } from "./router/router";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MyApp() {
  const { isLoggedIn } = useAuth();

  const router = useRouter(isLoggedIn);

  return <NavigationContainer>{router}</NavigationContainer>;
}
