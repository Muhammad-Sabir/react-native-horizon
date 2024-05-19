import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useRouter } from 'expo-router'

const signIn = () => {

  const router = useRouter();
  const [user, setUser] = useState(null)

  return (
    <View className='p-4 w-full h-full bg-white'>

      {/*Logo */}
      <View className="flex flex-row items-center p-20 mt-36">
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode='contain'
          style={{ width: 400, height: 300 }}
        />
      </View>

      {/*Login Text */}
      <View className='mt-3 mb-5'>
        <Text className='text-2xl font-semibold text-gray-900'>
          {user ? 'Link Account' : 'Login'}
        </Text>
      </View>

      {user ? (
        <View></View>
      ) : (
        <View className='mt-3'>

          {/*Login Form  */}
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Email address</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your email"
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Password</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your password"
              secureTextEntry={true}
              autoCapitalize='none'
            />
          </View>

          <TouchableOpacity onPress={() => router.push('(tabs)')}>
            <View className="p-3 mt-4 mb-5 bg-bankGradient h-14 rounded-lg justify-center items-center w-[407px]">
              <Text className="text-md text-white text-center m-1" >Login</Text>
            </View>
          </TouchableOpacity>

          <View className="mt-4 mb-4 flex-row justify-center items-center gap-2">
            <Text className="text-md text-center text-gray-500">Don't have an account?</Text>
            <Link className='text-md text-center text-bankGradient font-semibold' href='/signUp'>Sign Up</Link>
          </View>

        </View>
      )}
    </View>
  )
}

export default signIn