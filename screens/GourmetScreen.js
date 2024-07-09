import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

export default function GourmetScreen({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollViewRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setActiveSlide(slide);
  };
  const famousGourmetRestaurants = [
    { id: '1', name: 'Lanches Crek - Jardim Sul', image: require('../assets/creklanches.png') },
    { id: '2', name: 'Super Food Bowls - Foods', image: require('../assets/superbowl.png') },
    { id: '3', name: 'Vip Sushi - Vila Sônia', image: require('../assets/vipsushi.png') },
    { id: '4', name: "Mcdonald's - Morumbi Town", image: require('../assets/mcdonalds.png') },
    { id: '5', name: 'Japan One - Morumbi', image: require('../assets/japanone.png') },
    { id: '6', name: 'Kfc - Frango Frito - Morumbi Town', image: require('../assets/kfc.png') },
  ];

  const banners = [
    { id: '1', source: require('../assets/pecatudaoimg.png') },
    { id: '2', source: require('../assets/almocobomebarato.png') },
    { id: '3', source: require('../assets/pecamequi.png') },
  ];

  const categories = [
    { id: 1, name: 'Momentos especiais', image: require('../assets/momentosespeciais.png') },
    { id: 2, name: 'Toda hora', image: require('../assets/todahora.png') },
    { id: 3, name: 'Adoçar', image: require('../assets/adocar.png') },
    { id: 4, name: 'Kenti', image: require('../assets/kenti.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>IFOOD GOURMET</Text>
      </View>

      {/* Initial Banner */}
      <View style={styles.initialBannerContainer}>
        <Image source={require('../assets/guiagourmet.png')} style={styles.initialBannerImage} />
      </View>

      {/* Categories */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Uma escolha pra:</Text>
        <View style={styles.categoriesContainer}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={styles.category}
              onPress={() => category.name === 'Kenti' ? navigation.navigate('Kenti') : null}
            >
              <Image source={category.image} style={styles.categoryImage} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Famous Gourmet Restaurants */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Famosos no Gourmet</Text>
            <Text style={styles.viewMore}>Ver mais</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.restaurantsContainer}>
          {famousGourmetRestaurants.map(restaurant => (
            <View key={restaurant.id} style={styles.restaurant}>
              <Image source={restaurant.image} style={styles.restaurantImage} />
              <Text style={styles.restaurantText}  numberOfLines={2} ellipsizeMode="tail">{restaurant.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>


    {/* Banner */}
        <View style={styles.bannerContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          ref={scrollViewRef}
        >
          {banners.map(banner => (
            <Image key={banner.id} source={banner.source} style={styles.bannerImage} />
          ))}
        </ScrollView>
        <View style={styles.paginationContainer}>
          {banners.map((_, index) => (
            <View key={index} style={[
              styles.paginationDot,
              { opacity: index === activeSlide ? 1 : 0.3 }
            ]} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 18,
    color: '#E4002B',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
  },
  initialBannerContainer: {
    paddingHorizontal: 16,
  },
  initialBannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  sectionContainer: {
    marginTop: 5,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewMore: {
    color: '#E4002B',
    alignSelf: 'flex-end',
  },
  seeMoreButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  category: {
    alignItems: 'center',
    width: '48%',
    marginVertical: 10,
  },
  categoryImage: {
    width: '100%',
    height: 70,
    borderRadius: 10,
  },
  restaurantsContainer: {
    marginTop: 10,
  },
  restaurant: {
    alignItems: 'center',
    marginRight: 10,
  },
  restaurantImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginBottom: 5,
  },
  restaurantText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    width: 80,
  },
  bannerContainer: {
    padding: 10,
    marginTop: 30,
  },
  bannerImage: {
    width: Dimensions.get('window').width - 30,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginHorizontal: 4,
  },
});
