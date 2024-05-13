import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { Input, Container, Button, Box } from './app/style';
import ReactNativeModal from 'react-native-modal';
 

export default function App() {
  const [txt, setTxt] = useState("")
  const [valor,setValor] = useState(["cafe","cerveza","suco","refrigerante","agua","jagua"])
  const [isVisible, setIsVisible] = useState(false)
  const [borrar, setBorrar] = useState(false)

  const deleteValor = (index) => {
    return valor.filter( v => v !== valor[index])
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight}}>
      <Container style={styles.container}>
        
        <Input onChangeText={text => setTxt(text)}/>
        <Button onPress={() => setValor([...valor,txt])}>
          <Text>+</Text>
        </Button>
        {/* <FlatList 
        data={valor}
        renderItem={([v])=> <Box>{v[0]}</Box>}
        keyExtractor={index => index}
        /> */}
        {
          valor.map( (v,index) => <Box onPress={() => {
            setIsVisible(!isVisible)
            if (borrar) {
              setValor(deleteValor(index)) 
            }  
          }
          }>{v}</Box>)
        }
      </Container>
      <ReactNativeModal isVisible={isVisible}>
        <View>
          <Text>hola</Text>
          <Button title="Hide modal" onPress={ () => setIsVisible(false)}/>
          <Button onPress={() => setBorrar(true)}>Acepto</Button>
         </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //paddingTop: 50,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
