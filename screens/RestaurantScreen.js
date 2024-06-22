import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function RestaurantScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Restaurantes');

  const categorias = [
    { id: 1, name: 'Marmita', image: require('../assets/marmita.png') },
    { id: 2, name: 'Brasileira', image: require('../assets/feijoada.png') },
    { id: 3, name: 'Árabe', image: require('../assets/arabe.png') },
    { id: 4, name: 'Promoções', image: require('../assets/restaurantesicones.png') },
  ];

  const pratosFamosos = [
    { id: 1, name: 'Marmita', image: require('../assets/marmitaprato.png') },
    { id: 2, name: 'Parmegiana', image: require('../assets/parmegiana.png') },
    { id: 3, name: 'Carne', image: require('../assets/carne.png') },
    { id: 4, name: 'Massas', image: require('../assets/massas.png') },
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

  const handleNavigationPress = (item) => {
    if (item.name === 'Restaurantes' || item.name === 'Gourmet') {
      setSelectedCategory(item.name);
      
      if (item.name === 'Gourmet') {
        navigation.navigate('Gourmet');
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.address}>R. Nicola Rollo, 151</Text>
      </View>

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
        <Image source={require('../assets/restaurantesicones.png')} style={styles.bannerImage} />
      </View>

      {/* Last Stores */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Últimas Lojas</Text>
        <Text style={styles.viewMore}>Ver mais</Text>
      </View>
      <Image source={require('../assets/restaurantesicones.png')} style={styles.itemImage2} />
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
  address: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
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
  },
  categoriesContainer: {
    paddingVertical: 10,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 12,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
  },
  bannerContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  itemImage2: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  viewMore: {
    color: '#E4002B',
    alignSelf: 'flex-end',
  },
});
