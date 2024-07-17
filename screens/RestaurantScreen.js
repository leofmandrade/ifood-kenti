import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

export default function RestaurantScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Restaurantes');
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollViewRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setActiveSlide(slide);
  };

  const banners = [
    { id: '1', source: require('../assets/almocobomebarato.png') },
    { id: '2', source: require('../assets/almocobomebarato.png') },
    { id: '3', source: require('../assets/almocobomebarato.png') },
  ];

  const categorias = [
    { id: 1, name: 'Marmita', image: require('../assets/marmita.png') },
    { id: 2, name: 'Árabe', image: require('../assets/arabe.png') },
    { id: 3, name: 'Brasileira', image: require('../assets/feijoada.png') },
    // { id: 4, name: 'Promoções', image: require('../assets/promocoes.png') },
    { id: 5, name: 'Saudavel', image: require('../assets/saudavel.png') },
    { id: 6, name: 'Lanches', image: require('../assets/lanches.png') },
  ];

  const pratosFamosos = [
    { id: 1, name: 'Marmita', image: require('../assets/marmitaprato.png') },
    { id: 2, name: 'Parmegiana', image: require('../assets/parmegiana.png') },
    { id: 3, name: 'Carne', image: require('../assets/carne.png') },
    { id: 4, name: 'Massas', image: require('../assets/massas.png') },
    { id: 5, name: 'Frango', image: require('../assets/frango.png') },
    { id: 6, name: 'Peixes', image: require('../assets/frutosdomar.png') },
    { id: 7, name: 'Estrogonofe', image: require('../assets/estrogonofe.png') },
  ];

  const navigationItems = [
    { name: 'Restaurantes', image: require('../assets/restaurantesimg.png') },
    { name: 'Gourmet', image: require('../assets/gourmetimg.png') },
    { name: 'Mercados', image: require('../assets/mercadosimg.png') },
    { name: 'Farmácias', image: require('../assets/farmaciasimg.png') },
    { name: 'Bebidas', image: require('../assets/bebidasimg.png') },
    { name: 'Petshop', image: require('../assets/petshopimg.png') },
    { name: 'Shopping', image: require('../assets/shoppingimg.png') },
  ];

  const recentStores = [
    { id: '1', name: 'Lanches Crek - Jardim Sul', image: require('../assets/creklanches.png') },
    { id: '2', name: 'Super Food Bowls - Foods', image: require('../assets/superbowl.png') },
    { id: '3', name: 'Vip Sushi - Vila Sônia', image: require('../assets/vipsushi.png') },
    { id: '4', name: "Mcdonald's - Morumbi Town", image: require('../assets/mcdonalds.png') },
    { id: '5', name: 'Japan One - Morumbi', image: require('../assets/japanone.png') },
    { id: '6', name: 'Kfc - Frango Frito - Morumbi Town', image: require('../assets/kfc.png') },
  ];

  const handleNavigationPress = (item) => {
    if (item.name === 'Gourmet') {
      navigation.navigate('Gourmet');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.address}>R. Nicola Rollo, 151</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Navigation Items */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.navContainer}>
          {navigationItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleNavigationPress(item)}
              style={[
                styles.navItem,
                selectedCategory === item.name && styles.selectedNavItem,
              ]}
            >
              <Image source={item.image} style={styles.navIcon} />
              <Text
                style={[
                  styles.navText,
                  selectedCategory === item.name && styles.selectedNavText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchPlaceholder}>Buscar em Restaurantes</Text>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categorias.map(categoria => (
            <TouchableOpacity key={categoria.id} style={styles.category}>
              <Image source={categoria.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{categoria.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Famous Dishes */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pratos famosos no almoço</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dishesContainer}>
            {pratosFamosos.map(prato => (
              <View key={prato.id} style={styles.dish}>
                <Image source={prato.image} style={styles.dishImage} />
                <Text style={styles.dishText}>{prato.name}</Text>
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

        {/* Recent Stores */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Últimas Lojas</Text>
          <Text style={styles.viewMore}>Ver mais</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentStoresContainer}>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 18,
    fontFamily: 'iFoodRCTextos-Regular',
    color: '#E4002B',
  },
  address: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'iFoodRCTextos-Bold',
    color: '#000',
  },
  content: {
    flex: 1,
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
  navContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
  },
  selectedNavItem: {
    backgroundColor: '#ffbcb8',
  },
  navIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  navText: {
    fontSize: 14,
    fontFamily: 'iFoodRCTextos-Regular',
    color: '#333',
  },
  selectedNavText: {
    color: '#9c0d03',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 16,
    borderRadius: 5,
  },
  searchPlaceholder: {
    color: '#999',
    fontFamily: 'iFoodRCTextos-Regular',
  },
  categoriesContainer: {
    paddingVertical: 10,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 12,
    fontFamily: 'iFoodRCTextos-Regular',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'iFoodRCTextos-Bold',
  },
  dishesContainer: {
    marginTop: 10,
  },
  dish: {
    alignItems: 'center',
    marginRight: 10,
  },
  dishImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  dishText: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'iFoodRCTextos-Regular',
  },
  recentStoresContainer: {
    paddingVertical: 10,
  },
  store: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storeImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginBottom: 5,
  },
  storeText: {
    fontFamily: 'iFoodRCTextos-Regular',
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    width: 70,
  },
  viewMore: {
    color: '#E4002B',
    alignSelf: 'flex-end',
  },
});
