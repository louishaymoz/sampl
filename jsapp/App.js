import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardScreen from './screens/CardScreen';



function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState('')
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
  fetch('https://silver-space-fiesta-4jxgr6xvj67q2749j-8000.app.github.dev/api/cards/', {
    headers: {
      'Accept': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => setBlocks(data))
    .catch(error => console.log('Error:', error));
  }, []);
  
  const [boxText, setBoxText] = useState('TEXT')
  const [text, setText] = useState('');
  const [list, setList] = useState([
    {key: 'January'},
    {key: 'February'},
    {key: 'March'},
    {key: 'April'},
    {key: 'May'},
    {key: 'June'},
    {key: 'July'},
    {key: 'August'},
    {key: 'September'},
    {key: 'October'},
    {key: 'November'},
    {key: 'December'},
  ]);
  const onPressButton = (textFromCard) => {
    if (list.some(item=> item.key === textFromCard)){
      setList(list.filter(item=> item.key !==textFromCard));
    } else {
      setList([...list, {key:textFromCard}])
    }    
  };
  
  // we will move your UI here in the next step
  return (
    
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{fontSize: 24, marginBottom: 0}}>SAMPL!</Text>
        <TextInput
          style={{height: 40, width: 150, padding: 10, backgroundColor: '#fbc3c3', borderRadius: 10}}
          placeholder="Search..."
          onChangeText={setSearchText}
          // onChangeText={search => setText(search)}
        />
        {/* <Text style={{padding: 0, fontSize: 0}}>{text}</Text> */}
      </View>
      <View style={{height: 200, marginTop: 0, alignItems: 'center'}}>
        <FlatList
        data={list.filter(item => item.key.toLowerCase().includes(searchText.toLowerCase()))}
        renderItem={({item}) => <Text style={{ padding: 2, fontSize: 30 }}>{item.key}</Text>}
      />
      </View>

      <View style={{flex: 1, maxWidth: 400, flexDirection: 'row' , flexWrap: 'wrap', alignSelf: 'center'}}>
        {blocks.filter((item => item.title.toLowerCase().includes(searchText.toLowerCase()))).map(item => {
          return(
            <View key={item.id} style={{width: 175, padding: 20, backgroundColor: '#ffc2c2', borderRadius: 10, alignItems: 'center', margin: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate('CardScreen', { card: item })}>
                <Image source={{uri: item.image_url}} style={{width: 120, height: 120, borderRadius: 10,marginBottom: 15}}/>
                <Text style={{fontSize: 18, marginBottom: 15}}>{item.title}</Text>
              </TouchableOpacity>
              <Button onPress={() => onPressButton(item.title)} title='+/-' color='#ff0000' />
            </View>
          );
        })}

      </View>
    </ScrollView>
    
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
