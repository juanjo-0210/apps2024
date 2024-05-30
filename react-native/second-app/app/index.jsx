import { Link } from "expo-router";
import { Text, View } from "react-native";

const Home = () => {
  return (
   <View>
    <Link href="/Home2">Home2</Link>

    <Text>hola mundo esto es un parrafo</Text>
  </View>
      
  );
};

export default Home;