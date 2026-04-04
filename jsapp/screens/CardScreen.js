import React from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function CardScreen({ route }) {
  const { card } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={{uri: card.image_url}} style={{width: 250, height: 250, borderRadius: 10, marginBottom: 15, marginTop: 15}}/>
      <Text style={{ fontSize: 30 }}>{card.title}</Text>
      <MapView
        style={{ width: '100%', height: 260, width: 350, marginTop: 15, borderRadius: 15}}
        initialRegion={{
          latitude: card.latitude,
          longitude: card.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: card.latitude, longitude: card.longitude }}
          title={card.title}
        />
      </MapView>
    </View>
  );
}