import React, { useRef } from 'react';
import { Animated, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function KentiScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const restaurants = [
    { id: '1', name: 'Camelo Moema', image: require('../assets/camelo_moema.png'), type: 'Italiana', deliveryTime: '45-55 min', rating: '4.9' },
    { id: '2', name: 'Farabbud', image: require('../assets/farabbud.png'), type: 'Árabe', deliveryTime: '50-60 min', rating: '4.7' },
    { id: '3', name: 'Di Bari', image: require('../assets/dibari.png'), type: 'Pizzaria', deliveryTime: '30-40 min', rating: '4.8' },
    { id: '4', name: 'Paul’s Boutique', image: require('../assets/paulsboutique.png'), type: 'Pizzaria', deliveryTime: '35-45 min', rating: '4.6' },
    { id: '5', name: 'Margherita Pizzeria', image: require('../assets/margherita.png'), type: 'Pizzaria', deliveryTime: '25-35 min', rating: '4.9' },
    { id: '6', name: 'Supra Mauro Maia', image: require('../assets/supra.png'), type: 'Italiana', deliveryTime: '40-50 min', rating: '4.7' },
    { id: '7', name: 'Camarada Camarão', image: require('../assets/camaradacamarao.png'), type: 'Frutos do Mar', deliveryTime: '55-65 min', rating: '4.8' },
    { id: '8', name: 'Pizza Hut Vila Mariana', image: require('../assets/pizzahut.png'), type: 'Pizzaria', deliveryTime: '30-40 min', rating: '4.5' },
    { id: '9', name: 'Domino’s 9 Julho', image: require('../assets/dominos.png'), type: 'Pizzaria', deliveryTime: '20-30 min', rating: '4.6' },
  ];

  const backButtonColor = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ['#fff', '#000'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* StatusBar Configuration */}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

      {/* Static Banner */}
      <Animated.View style={[styles.bannerContainer, {
        paddingTop: StatusBar.currentHeight, // Ensure banner covers the status bar
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, -150],
            extrapolate: 'clamp',
          })
        }]
      }]}>
        <Animated.Image 
          source={require('../assets/kenti.jpg')} 
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
          <Animated.Text style={[styles.backButtonText, { color: backButtonColor }]}>
            {'<'}
          </Animated.Text>
        </TouchableOpacity>
        <Animated.Text style={[styles.fixedTitle, {
          opacity: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        }]}>KENTI</Animated.Text>
      </Animated.View>

      {/* Fixed Filters and Title */}
      <Animated.View style={[styles.fixedFilters, {
        backgroundColor: scrollY.interpolate({
          inputRange: [0, 150],
          outputRange: ['transparent', '#fff'],
          extrapolate: 'clamp',
        }),
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [150, 0],
            extrapolate: 'clamp',
          })
        }]
      }]}>
        <Animated.Text style={[styles.title, {
          opacity: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          })
        }]}>Peça comida Kenti!</Animated.Text>
        <View style={styles.filtersContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Ordenar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Entrega Grátis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Vale-refeição</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Scrollable Restaurants List */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <Animated.View style={{
          transform: [{
            translateY: scrollY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, -150],
              extrapolate: 'clamp',
            })
          }],
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}>
          <View style={styles.restaurantsContainer}>
            {restaurants.map((restaurant, index) => (
              <TouchableOpacity 
                key={restaurant.id} 
                onPress={() => {
                  if (restaurant.id === '1') {
                    navigation.navigate('Camelo');
                  }
                }}
                style={{ marginBottom: 16 }}
              >
                <Animated.View style={{
                  opacity: scrollY.interpolate({
                    inputRange: [0, 300],
                    outputRange: [1, 1],
                    extrapolate: 'clamp',
                  }),
                }}>
                  <View style={styles.restaurantCard}>
                    <Image source={restaurant.image} style={styles.restaurantImage} />
                    <View style={styles.restaurantInfo}>
                      <View style={styles.nameRatingContainer}>
                        <Text style={styles.restaurantName}>{restaurant.name}</Text>
                        <Text style={styles.restaurantRating}>⭐ {restaurant.rating}</Text>
                      </View>
                      <Text style={styles.restaurantDetails}>{restaurant.type} • {restaurant.deliveryTime}</Text>
                    </View>
                  </View>
                </Animated.View>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
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
    height: 190 + StatusBar.currentHeight,
    resizeMode: 'cover',
  },
  scrollView: {
    marginTop: 0,
  },
  scrollViewContent: {
    paddingTop: 300 + StatusBar.currentHeight,
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
    backgroundColor: 'transparent',
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
  fixedFilters: {
    position: 'absolute',
    top: 40 + StatusBar.currentHeight,
    left: 0,
    right: 0,
    zIndex: 2,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  restaurantsContainer: {
    marginTop: 10,
  },
  restaurantCard: {
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
  },
  restaurantImage: {
    width: '40%', // Adjust the percentage to make the image smaller
    height: undefined,  // Allows the height to be adjusted automatically
    aspectRatio: 1,  // Adjust this value to maintain the desired aspect ratio
    alignSelf: 'center',  // Center the image horizontally
    resizeMode: 'contain',  // Ensure the image is not cut
  },

  restaurantInfo: {
    padding: 10,
  },
  nameRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantRating: {
    fontSize: 14,
    color: '#bd8a00',
    marginLeft: 8,
  },
  restaurantDetails: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});