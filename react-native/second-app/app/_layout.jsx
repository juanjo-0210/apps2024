import { Stack } from "expo-router/stack"
import { View, Text, Screen } from "react-native"
// import { GestureHandlerRootView } from "react-native-gesture-handler"
// import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>   
  )
}

export default _layout