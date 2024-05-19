import React from 'react'
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { ReceiptItem, Home2, DollarCircle, MoneySend, CardAdd } from 'iconsax-react-native';

const PatientLayout = () => {

    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false, headerShown: false,
            tabBarStyle: {
                height: 63
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View className='items-center justify-center'>
                                <Home2 size={28} color={focused ? '#0179FE' : 'gray'} />
                                <Text className={`text-sm ${focused ? 'text-bankGradient' : 'text-gray-500'}`}>Home</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen
                name="banks"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View className='items-center justify-center'>
                                <DollarCircle size={28} color={focused ? '#0179FE' : 'gray'} />
                                <Text className={`text-sm ${focused ? 'text-bankGradient' : 'text-gray-500'}`}>Banks</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen
                name="transactionHistory"
                options={{
                    tabBarIcon: () => {
                        return (
                            <View className='items-center justify-center bg-bankGradient rounded-full' style={{ width: 60, height: 60, top: -17 }}>
                                <ReceiptItem size={28} color={"white"} />
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen
                name="payment"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View className='items-center justify-center'>
                                <MoneySend size={28} color={focused ? '#0179FE' : 'gray'} />
                                <Text className={`text-sm ${focused ? 'text-bankGradient' : 'text-gray-500'}`}>Payment</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen
                name="connectBanks"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View className='items-center justify-center'>
                                <CardAdd size={28} color={focused ? '#0179FE' : 'gray'} />
                                <Text className={`text-sm ${focused ? 'text-bankGradient' : 'text-gray-500'}`}>Connect</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tabs>
    )
}


export default PatientLayout