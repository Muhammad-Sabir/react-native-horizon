import { Text, View, ImageBackground, Button, Image, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <Image source={require('../assets/images/backgroundImage.png')} resizeMode='contain'
        className="h-[48vh] aspect-square mt-40" />
      <Text className="text-black-1 text-4xl mb-24 text-center">Ultimate Banking App For an Exceptional Financial Experience</Text>
      <View className='mx-10'>
        <TouchableOpacity onPress={() => router.push('signIn')}>
          <View className="m-2 p-3 bg-bankGradient h-14 rounded-lg justify-center items-center w-[331px]">
            <Text className="text-md text-white text-center m-1" >Log In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('signUp')}>
          <View className="m-2 p-3  bg-white h-14 rounded-lg border border-blue-500 justify-center items-center w-[331px]">
            <Text className="text-md text-bankGradient text-center" >Create An Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome

