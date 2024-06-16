import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

export default function SplashScreen({ navigation }) {
  const scaleValue = useRef(new Animated.Value(0.5)).current;
  const fadeValue = useRef(new Animated.Value(0)).current; // Inicialmente transparente

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        })
      ])
    ]).start(() => {
      navigation.replace('Main');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/ifoodlogo.png')}
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
      />
      <Animated.View
        style={[
          styles.whiteOverlay,
          { opacity: fadeValue }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4002B',
    
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },
  whiteOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
});
