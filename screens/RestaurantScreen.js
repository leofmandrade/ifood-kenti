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
    'Restaurantes',
    'Gourmet',
    'Mercados',
    'Farmácias',
    'Bebidas',
    'Petshop',
    'Shopping',
  ];

  const handleNavigationPress = (item) => {
    if (item === 'Restaurantes' || item === 'Gourmet') {
      setSelectedCategory(item);
      
      if (item === 'Gourmet') {
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
              selectedCategory === item && styles.selectedNavItem,
            ]}
          >
            <Text
              style={[
                styles.navText,
                selectedCategory === item && styles.selectedNavText,
              ]}
            >
              {item}
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
    paddingHorizontal: 16,
  },
  navItem: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  selectedNavItem: {
    backgroundColor: '#E4002B',
  },
  navText: {
    fontSize: 14,
    color: '#333',
  },
  selectedNavText: {
    color: '#fff',
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
    width: 100,
    height: 100,
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
    width: 100,
    height: 100,
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
