import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const banners = [
  { id: '1', source: require('../assets/pecatudaoimg.png') },
  { id: '2', source: require('../assets/restaurantesimg.png') },
  { id: '3', source: require('../assets/restaurantesimg.png') },
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
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Coxinha de Frango',
    price: 'R$ 25,00',
    oldPrice: 'R$ 50,00',
    time: '20-30 min',
    delivery: 'Grátis'
  },
  {
    id: '4',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Pastel de Queijo',
    price: 'R$ 20,00',
    oldPrice: 'R$ 40,00',
    time: '10-20 min',
    delivery: 'Grátis'
  },
  {
    id: '5',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Mini Pizzas',
    price: 'R$ 35,00',
    oldPrice: 'R$ 70,00',
    time: '25-35 min',
    delivery: 'Grátis'
  },
  {
    id: '6',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Esfirra de Carne',
    price: 'R$ 22,00',
    oldPrice: 'R$ 44,00',
    time: '15-25 min',
    delivery: 'Grátis'
  },
  {
    id: '7',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Quibe Frito',
    price: 'R$ 28,00',
    oldPrice: 'R$ 56,00',
    time: '30-40 min',
    delivery: 'Grátis'
  },
  {
    id: '8',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Bolinha de Queijo',
    price: 'R$ 26,00',
    oldPrice: 'R$ 52,00',
    time: '20-30 min',
    delivery: 'Grátis'
  },
  {
    id: '9',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Empada de Frango',
    price: 'R$ 27,00',
    oldPrice: 'R$ 54,00',
    time: '25-35 min',
    delivery: 'Grátis'
  },
  {
    id: '10',
    image: require('../assets/pastelfrangocatupiry.png'),
    title: 'Croquete de Carne',
    price: 'R$ 30,00',
    oldPrice: 'R$ 60,00',
    time: '15-25 min',
    delivery: 'Grátis'
  },
];


export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      {/* Address */}
      <View style={styles.addressContainer}>
        <Text style={styles.address}>R. Nicola Rollo, 151</Text>
      </View>

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
          contentContainerStyle={styles.bannerScrollContainer}
        >
          {banners.map(banner => (
            <Image key={banner.id} source={banner.source} style={styles.bannerImage} />
          ))}
        </ScrollView>
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
      <Image source={require('../assets/restaurantesicones.png')} style={styles.itemImage2} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressContainer: {
    alignItems: 'center',
    padding: 10,
  },
  address: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
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
    alignItems: 'center'
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
    backgroundColor: '#E4002B',
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
  bannerScrollContainer: {
    flexDirection: 'row',
  },
  bannerImage: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
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
    // backgroundColor: '#f8f4f4',
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
  itemImage2: {
    width: '100%',
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
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
  itemsContainer: {
    padding: 10,
    flexDirection: 'row',
  },
});
