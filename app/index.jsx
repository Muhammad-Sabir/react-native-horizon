import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'


const Welcome = () => {
    const router = useRouter();
    return (
    <View className="bg-white">
      <Text className="text-lg text-custom-pink-400">Heelooo</Text>
      <Text className="text-blue-500 text-2xl font-bold mb-24">Doctor Assisdddtance</Text>
      <TouchableOpacity className="bg-[#045883]" onPress={() => router.push("(tabs)")}>
          <Text className="color-blue-500 text-base">Sign In</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Welcome
