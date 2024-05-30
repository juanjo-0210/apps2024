import { Link } from "expo-router";
import { CATEGORIES } from "../data/categori";
import { FlatList, View, Text } from "react-native";


const Home = () => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={ ({item}) => <Text>{item.name}</Text>}
    />
  );
};

export default Home;