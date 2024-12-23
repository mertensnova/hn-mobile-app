import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./sign-in";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <SignIn />
    </>
  );
}
