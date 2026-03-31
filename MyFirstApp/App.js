import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {

  const onPressSubmit = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 24, marginBottom: 0}}>Hello, Expo Web!</Text>
      <Button
        onPress={onPressSubmit}
        title="Submit"
        color="#760909"
      />
    </View>
  );
}