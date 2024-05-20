import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/AuthContext"; 

const signIn = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { login, currentUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      await login(formData.email, formData.password);
      router.replace("(tabs)");
    } catch (error) {
      console.error("Failed to log in. Please check your email and password.");
    }
  };

  
  return (
    <View className="w-full h-full p-4 bg-white">
      {/*Logo */}
      <View className="flex flex-row items-center justify-center mt-28">
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            resizeMode: "cover",
            height: 300,
            width: 350,
          }}
        />
      </View>

      {/*Login Text */}
      <View className="mt-3 mb-5">
        <Text className="text-3xl font-semibold text-gray-900">
          {user ? "Link Account" : "Login"}
        </Text>
      </View>

      {user ? (
        <View></View>
      ) : (
        <View className="mt-3">
          {/*Login Form  */}
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Email address</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Password</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your password"
              secureTextEntry={true}
              autoCapitalize="none"
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
            />
          </View>

          <TouchableOpacity onPress={handleLogin}>
            <View className="items-center justify-center w-full p-3 mt-4 mb-5 rounded-lg bg-bankGradient h-14">
              <Text className="m-1 text-center text-white text-md">Login</Text>
            </View>
          </TouchableOpacity>

          <View className="flex-row items-center justify-center gap-2 mt-4 mb-4">
            <Text className="text-center text-gray-500 text-md">
              Don't have an account?
            </Text>
            <Link
              className="font-semibold text-center text-md text-bankGradient"
              href="/signUp"
            >
              Sign Up
            </Link>
          </View>
        </View>
      )}
    </View>
  );
};

export default signIn;
