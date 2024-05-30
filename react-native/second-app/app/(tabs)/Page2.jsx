import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Page2 = () => {
  const { cat } = useLocalSearchParams()

  
  return (
  <View>
    <Text>{cat}</Text>
  </View>
)};

export default Page2;