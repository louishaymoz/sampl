import React from 'react';
import { View, Text, Image } from 'react-native';

export default function CardScreen({ route }) {
  const { card } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={{uri: card.imageUrl}} style={{width: 300, height: 300, borderRadius: 10,marginBottom: 15, marginTop: 15}}/>
      <Text style={{ fontSize: 30 }}>{card.text}</Text>
    </View>
  );
}