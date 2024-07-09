import React, { useRef } from 'react';
import { Animated, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function KentiScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const restaurants = [
    { id: '1', name: 'Camelo Moema', image: require('../assets/camelo_moema.png'), type: 'Italiana', deliveryTime: '45-55 min', rating: '4.9' },
    { id: '2', name: 'Farabbud', image: require('../assets/farabbud.png'), type: 'Árabe', deliveryTime: '50-60 min', rating: '4.7' },
    { id: '3', name: 'Farabbud', image: require('../assets/farabbud.png'), type: 'Árabe', deliveryTime: '50-60 min', rating: '4.7' },
    { id: '4', name: 'Farabbud', image: require('../assets/farabbud.png'), type: 'Árabe', deliveryTime: '50-60 min', rating: '4.7' },
  ];

  return (
    <View style={styles.container}>
      {/* Static Banner */}
      <Animated.View style={[styles.bannerContainer, {
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
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 0],
            extrapolate: 'clamp',
          })
        }],
        backgroundColor: scrollY.interpolate({
          inputRange: [0, 150],
          outputRange: ['transparent', '#fff'],
          extrapolate: 'clamp',
        })
      }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Animated.Text style={[styles.backButtonText, {
            opacity: scrollY.interpolate({
              inputRange: [0, 150],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            })
          }]}>{'<'}</Animated.Text>
        </TouchableOpacity>
        <Animated.Text style={[styles.fixedTitle, {
          opacity: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        }]}>KENTI</Animated.Text>
      </Animated.View>

      {/* Fixed Filters */}
      <Animated.View style={[styles.fixedFilters, {
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [150, 0],
            extrapolate: 'clamp',
          })
        }]
      }]}>
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
          { useNativeDriver: true }
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
            <Animated.Text style={[styles.title, {
              transform: [{
                translateY: scrollY.interpolate({
                  inputRange: [0, 150],
                  outputRange: [0, -150],
                  extrapolate: 'clamp',
                })
              }],
              opacity: scrollY.interpolate({
                inputRange: [0, 150],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              })
            }]}>Peça comida Kenti!</Animated.Text>
            {restaurants.map(restaurant => (
              <Animated.View key={restaurant.id} style={{
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
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  scrollView: {
    marginTop: 0,
  },
  scrollViewContent: {
    paddingTop: 250,  // Ensure content starts below the banner and fixed filters
    paddingHorizontal: 16,
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    left: 10,
    zIndex: 3,
    borderWidth: 1,
    borderColor: '#ddd', // Optional: to give a slight border
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fixedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fixedFilters: {
    position: 'absolute',
    top: 50, // Adjust according to the height of fixedHeader
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  restaurantCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',  // Ensure borderRadius works for children
  },
  restaurantImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
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
    color: '#FFD700',
    marginLeft: 8,
  },
  restaurantDetails: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,  // Adjust spacing between rating and details
  },
});
