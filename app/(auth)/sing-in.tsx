import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SingIn = () => {
  return (
    <View>
      <Text>sing-in</Text>
      <Link href="/(auth)/sing-in">Create Account</Link>
    </View>
  );
};

export default SingIn;
