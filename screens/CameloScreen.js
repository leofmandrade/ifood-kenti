import React, { useRef } from 'react';
import { Animated, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function CameloScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const items = [
    { id: '1', name: 'Linguiça Toscana', image: require('../assets/acai.png'), price: 'R$ 34,00' },
    { id: '2', name: 'Fralda Red', image: require('../assets/acai.png'), price: 'R$ 122,00' },
    { id: '3', name: 'Salada Verde', image: require('../assets/acai.png'), price: 'R$ 48,00' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

      {/* Static Banner */}
      <Animated.View style={[styles.bannerContainer, {
        paddingTop: StatusBar.currentHeight, 
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, -150],
            extrapolate: 'clamp',
          })
        }]
      }]}>
        <Animated.Image 
          source={require('../assets/acai.png')} 
          style={[styles.bannerImage, {
            opacity: scrollY.interpolate({
              inputRange: [0, 150],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            })
          }]}
        />
      </Animated.View>

      {/* Fixed Header */}
      <Animated.View style={[styles.fixedHeader, {
        backgroundColor: scrollY.interpolate({
          inputRange: [0, 150],
          outputRange: ['transparent', '#fff'],
          extrapolate: 'clamp',
        })
      }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Animated.Text style={[styles.fixedTitle, {
          opacity: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        }]}>Fazenda Churrascada</Animated.Text>
      </Animated.View>

      {/* Restaurant Information */}
      <View style={styles.restaurantInfoContainer}>
        <View style={styles.restaurantDetailsContainer}>
          <Text style={styles.restaurantName}>Fazenda Churrascada</Text>
          <Text style={styles.restaurantType}>Carnes • 2,9 km • $$$$</Text>
          <Text style={styles.restaurantHours}>Aberto até 22h • Pedido min. R$ 20</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Perfil da loja</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Items List */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.itemsContainer}>
          {items.map(item => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  bannerImage: {
    width: '100%',
    height: 150 + StatusBar.currentHeight,
    resizeMode: 'cover',
  },
  scrollView: {
    marginTop: 0,
  },
  scrollViewContent: {
    paddingTop: 200 + StatusBar.currentHeight,
    paddingHorizontal: 16,
  },
  fixedHeader: {
    position: 'absolute',
    top: StatusBar.currentHeight,
    left: 0,
    right: 0,
    height: 50,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fixedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantInfoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantDetailsContainer: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantType: {
    fontSize: 14,
    color: '#555',
  },
  restaurantHours: {
    fontSize: 12,
    color: '#555',
  },
  profileButton: {
    backgroundColor: '#ff4757',
    padding: 10,
    borderRadius: 8,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemsContainer: {
    marginTop: 10,
  },
  itemCard: {
    marginBottom: 16,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  itemInfo: {
    padding: 10,
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#555',
  },
});
