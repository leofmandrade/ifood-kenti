import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';

export default function RestaurantScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/restaurantesimg.png')} style={styles.image} />
      <Text style={{ fontSize: 24, margin: 20 }}>Nome do Restaurante</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
