import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardScreen from './screens/CardScreen';

function HomeScreen({ navigation }) {

  const [blocks, setBlocks] = useState([
    { id: 1, text: "Block1", imageUrl: "https://picsum.photos/200"},
    { id: 2, text: "Block2", imageUrl: "https://picsum.photos/201"},
    { id: 3, text: "Block3", imageUrl: "https://picsum.photos/200"}
  ])
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
        <Button
          onPress={onPressButton}
          title="Button"
          color="#760909"
        />
        <TextInput
          style={{height: 50}}
          placeholder="Search input"
          onChangeText={search => setText(search)}
          defaultValue={text}
        />
        <Text style={{padding: 10, fontSize: 30}}>{text}</Text>
      </View>
      <View style={{height: 200, marginTop: 20, alignItems: 'center'}}>
        <FlatList
        data={list}
        renderItem={({item}) => <Text style={{ padding: 2, fontSize: 30 }}>{item.key}</Text>}
      />

      </View>
      <View style={{flex: 1, maxWidth: 450, flexDirection: 'row' , flexWrap: 'wrap', alignSelf: 'center'}}>
        {blocks.map(item => {
          return(
            <View key={item.id} style={{width: 200, padding: 20, backgroundColor: '#ffc2c2', borderRadius: 10, alignItems: 'center', margin: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate('CardScreen', { card: item })}>
                <Image source={{uri: item.imageUrl}} style={{width: 150, height: 150, borderRadius: 10,marginBottom: 15}}/>
                <Text style={{fontSize: 18, marginBottom: 15}}>{item.text}</Text>
              </TouchableOpacity>
              <Button onPress={() => onPressButton(item.text)} title='+/-' color='#ff0000' />
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
