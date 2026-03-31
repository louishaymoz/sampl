import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';


export default function App() {

  const onPressButton = () => {
    console.log('Button pressed!');
  };
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
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
      <View style={{flex: 1,width: '100%', marginTop: 20 }}>
        <FlatList
        data={[
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
        ]}
        renderItem={({item}) => <Text style={{ padding: 2, fontSize: 30 }}>{item.key}</Text>}
      />

      </View>
    </View>
  );
} 