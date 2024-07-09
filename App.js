import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import * as Font from 'expo-font'; // Importe o módulo expo-font

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import SearchScreen from './screens/SearchScreen';
import GourmetScreen from './screens/GourmetScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import KentiScreen from './screens/KentiScreen';


import HomeIcon from './assets/homeicon.png';
import SearchIcon from './assets/searchicon.png';
import OrdersIcon from './assets/ordersicon.png';
import ProfileIcon from './assets/profileicon.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Restaurants" component={RestaurantScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Gourmet" component={GourmetScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Kenti" component={KentiScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Início"
          component={HomeStack}
          options={{ 
            tabBarIcon: () => <Image source={HomeIcon} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Busca"
          component={SearchScreen}
          options={{ 
            tabBarIcon: () => <Image source={SearchIcon} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Pedidos"
          component={OrdersScreen}
          options={{ 
            tabBarIcon: () => <Image source={OrdersIcon} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{ 
            tabBarIcon: () => <Image source={ProfileIcon} />,
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'iFoodRCTextos-Regular': require('./assets/fonts/iFoodRCTextos-Regular.ttf'),
        'iFoodRCTextos-Bold': require('./assets/fonts/iFoodRCTextos-Bold.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E4002B" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Restaurants" component={RestaurantScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
