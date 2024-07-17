import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text, Dimensions, StatusBar } from 'react-native';

const banners = [
  { id: '1', source: require('../assets/almocobomebarato.png') },
  { id: '2', source: require('../assets/almocobomebarato.png') },
  { id: '3', source: require('../assets/almocobomebarato.png') },
];

const freeDeliveryItems = [
  {
    id: '1',
    image: require('../assets/espetopicanha.png'),
    title: 'Monte Seu Combo 2 Espetos...',
    price: 'R$ 29,00',
    oldPrice: 'R$ 59,90',
    time: '15-25 min',
    delivery: 'Grátis'
  },
  {
    id: '2',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Salgados De 10g (50 Unidades)',
    price: 'R$ 29,00',
    oldPrice: 'R$ 45,95',
    time: '25-35 min',
    delivery: 'Grátis'
  },
  {
    id: '3',
    image: require('../assets/acai.png'),
    title: 'Açaí 700 ml + 6 Acompanhamentos',
    price: 'R$ 29,00',
    oldPrice: 'R$ 54,00',
    time: '19-29 min',
    delivery: 'Grátis'
  },
];

const recentStores = [
  { id: '1', name: 'Lanches Crek - Jardim Sul', image: require('../assets/creklanches.png') },
  { id: '2', name: 'Super Food Bowls - Foods', image: require('../assets/superbowl.png') },
  { id: '3', name: 'Vip Sushi - Vila Sônia', image: require('../assets/vipsushi.png') },
  { id: '4', name: "Mcdonald's - Morumbi Town", image: require('../assets/mcdonalds.png') },
  { id: '5', name: 'Japan One - Morumbi', image: require('../assets/japanone.png') },
  { id: '6', name: 'Kfc - Frango Frito - Morumbi Town', image: require('../assets/kfc.png') },

];

export default function HomeScreen({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setActiveSlide(slide);
  };

  return (
    <View style={styles.container}>
      {/* StatusBar Configuration */}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      
      {/* Fixed Address */}
      <View style={styles.fixedAddressContainer}>
        <Text style={styles.address}>R. Nicola Rollo, 151</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Categories */}
        <View style={styles.categoriesContainer1}>
          <TouchableOpacity 
            style={styles.categoryrestaurantes}
            onPress={() => navigation.navigate('Restaurants')}
          >
            <Text style={styles.categoryTextRestaurantes}>Restaurantes</Text>
            <Image source={require('../assets/restaurantesimg.png')} style={styles.categoryImage} />
          </TouchableOpacity>
          <View style={styles.categoryresto}>
            <TouchableOpacity style={styles.category}>
              <Image source={require('../assets/mercadosimg.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Mercados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Image source={require('../assets/farmaciasimg.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Farmácias</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoriesContainer2}>
          <TouchableOpacity style={styles.category}>
            <Image source={require('../assets/bebidasimg.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Bebidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Image source={require('../assets/petshopimg.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Pet Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Image source={require('../assets/shoppingimg.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Image source={require('../assets/gourmetimg.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Gourmet</Text>
          </TouchableOpacity>
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

        {/* Free Delivery Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Tudo com entrega grátis</Text>
          <Text style={styles.viewMore}>Ver mais</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.freeDeliveryContainer}>
          {Array(Math.ceil(freeDeliveryItems.length / 2)).fill().map((_, i) => (
            <View key={i} style={styles.freeDeliveryColumn}>
              {freeDeliveryItems.slice(i * 2, i * 2 + 2).map(item => (
                <View key={item.id} style={styles.freeDeliveryItem}>
                  <Image source={item.image} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                    <Text style={styles.itemOldPrice}>{item.oldPrice}</Text>
                    <Text style={styles.itemTime}>{item.time} • {item.delivery}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>

        {/* Recent Stores Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Últimas lojas</Text>
          <Text style={styles.viewMore}>Ver mais</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recentStoresContainer}>
          {recentStores.map(store => (
            <View key={store.id} style={styles.store}>
              <Image source={store.image} style={styles.storeImage} />
              <Text style={styles.storeText} numberOfLines={2} ellipsizeMode="tail">{store.name}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  fixedAddressContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  address: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingTop: 80, // Adjust according to the height of the fixed address
  },
  categoriesContainer1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  categoriesContainer2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  category: {
    backgroundColor: '#f8f4f4',
    padding: 10,
    paddingTop: 3,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryrestaurantes: {
    backgroundColor: '#f8f4f4',
    width: '45%',
    padding: 10,
    paddingTop: 3,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryresto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
  },
  categoryImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 14,
    color: '#000',
  },
  categoryTextRestaurantes: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  bannerContainer: {
    padding: 10,
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
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  viewMore: {
    fontSize: 14,
    color: '#E4002B',
  },
  freeDeliveryContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  freeDeliveryColumn: {
    flexDirection: 'column',
    marginRight: 10,
  },
  freeDeliveryItem: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 320, // Adjust as needed
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#298559',
  },
  itemOldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  itemTime: {
    fontSize: 14,
    color: '#000',
  },
  recentStoresContainer: {
    padding: 10,
  },
  store: {
    alignItems: 'center',
    marginRight: 20,
  },
  storeImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginBottom: 5,
  },
  storeText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    width: 70,
  },
});
