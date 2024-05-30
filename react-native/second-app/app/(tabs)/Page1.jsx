import {View, Text, FlatList} from 'react-native';
import {CATEGORIES} from '../../data/categori';
import { Link } from 'expo-router';

const Page1 = () => (
  <View>
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={ ({item}) => <Link href={{
        pathname : "/Page2",
        params: { cat : "categoria"}
      }}>{item.name}</Link>}
    />
  </View>
);

export default Page1;