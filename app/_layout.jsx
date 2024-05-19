import { Stack } from 'expo-router';
import '../global.css'

export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="signIn" options={{headerShown: false}}/>
        <Stack.Screen name="signUp" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
  );
}
