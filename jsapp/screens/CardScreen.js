import React from 'react';
import { View, Text } from 'react-native';

export default function CardScreen({ route }) {
  const { card } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>{card.text}</Text>
    </View>
  );
}