import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';



const banners = [
  { id: '1', source: require('../assets/pecatudaoimg.png') },
  { id: '2', source: require('../assets/restaurantesimg.png') },
  { id: '3', source: require('../assets/restaurantesimg.png') },
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
        <TouchableOpacity style={styles.categoryrestaurantes}>
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
        <FlatList
          data={banners}
          renderItem={({ item }) => (
            <Image source={item.source} style={styles.bannerImage} />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>

      {/* Free Delivery Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Tudo com entrega grátis</Text>
        <Text style={styles.viewMore}>Ver mais</Text>
      </View>
      <ScrollView horizontal style={styles.itemsContainer}>
        <View style={styles.item}>
          <Image source={require('../assets/espetopicanha.png')} style={styles.itemImage} />
          <Text style={styles.itemTitle}>Monte Seu Combo 2 Espetos...</Text>
          <Text style={styles.itemPrice}>R$ 29,00</Text>
          <Text style={styles.itemOldPrice}>R$ 59,90</Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/pastelfrangocatupiry.png')} style={styles.itemImage} />
          <Text style={styles.itemTitle}>Salgados De 10g (50 Unidades)</Text>
          <Text style={styles.itemPrice}>R$ 29,00</Text>
          <Text style={styles.itemOldPrice}>R$ 45,95</Text>
        </View>
      </ScrollView>

      {/* Recent Stores Section */}
      {/* Recent Stores Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Últimas lojas</Text>
        <Text style={styles.viewMore}>Ver mais</Text>
      </View>
      <ScrollView horizontal style={styles.itemsContainer}>
        <View style={styles.item}>
          <Image source={require('../assets/restaurantesicones.png')} style={styles.itemImage} />
        </View>
        {/* Adicione os itens das últimas lojas aqui */}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  time: {
    fontSize: 16,
    color: '#000',
  },
  search: {
    fontSize: 16,
    color: '#000',
  },
  addressContainer: {
    alignItems: 'center',
    padding: 10,
  },
  address: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'iFoodRCTextos-Bold',
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
    // gray color: '#E0E0E0',
    backgroundColor: '#f8f4f4',
    padding: 10,
    paddingTop: 3,
    borderRadius: 8,
    alignItems: 'center'
  },
  categoryrestaurantes: {
    backgroundColor: '#f8f4f4',
    // make it 100% width
    width: '45%',
    padding: 10,
    paddingTop: 3,
    borderRadius: 8,
    alignItems: 'center',
    // row
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryresto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    // make it blue
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
    fontFamily: 'iFoodRCTextos-Regular',
  },
  categoryTextRestaurantes: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'iFoodRCTextos-Bold',
    fontWeight: 'bold',
  },

  bannerContainer: {
    padding: 10,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
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
    fontFamily: 'iFoodRCTextos-Bold',
    fontWeight: 'bold',
  },
  viewMore: {
    fontSize: 14,
    color: '#E4002B',
  },
  itemsContainer: {
    padding: 10,
    // flex direction row
    flexDirection: 'row',
  },
  item: {
    width: 150,
    marginRight: 10,
  },
  itemImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  itemTitle: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'iFoodRCTextos-Regular',
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
  },
  itemOldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  bannerContainer: {
    padding: 10,
  },
  bannerImage: {
    width: 300, // Ajuste conforme necessário
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
  }
});
