import React, { useRef, useState } from 'react';
import { Animated, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StrogonoffModal from './StrogonoffModal';
const { width, height } = Dimensions.get('window');


export default function CameloScreen({ navigation }) {
    const scrollY = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const sections = [
        { id: '1', name: 'Os mais pedidos' },
        { id: '2', name: 'Strogonoffs' },
        { id: '3', name: 'Porções' },
        { id: '4', name: 'Filés' },
        { id: '5', name: 'Pizzas' },
        { id: '6', name: 'Acompanhamentos' },
        { id: '8', name: 'Bebidas' },
    ];
    const strogonoffs = [
        { id: '1', name: 'Strogonoff de camarão', image: require('../assets/strogonoff.png'), descricao: 'Acompanha arroz branco e batata palha.', serve: 'Serve 2 pessoas', price: 'R$ 224,00'},
        { id: '2', name: 'Strogonoff de camarão - Meia porção', image: require('../assets/strogonoff.png'), descricao: 'Acompanha arroz branco e batata palha.', price: 'R$ 134,40' },
        { id: '3', name: 'Strogonoff de frango', image: require('../assets/strogonofffrango.png'), descricao: 'Acompanha arroz branco e batata palha.', serve: 'Serve 2 pessoas', price: 'R$ 189,00' },
        { id: '4', name: 'Strogonoff de frango - Meia porção', image: require('../assets/strogonofffrango.png'), descricao: 'Acompanha arroz branco e batata palha.', price: 'R$ 113,40' }
        ];
    const porcoes = [
        { id: '1', name: 'Porção de calabresa acebolada', image: require('../assets/calabresaacebolada.png'), price: 'R$ 79,00' },
        { id: '2', name: 'Casquinha de pizza', image: require('../assets/casquinhapizza.png'), descricao: 'Com parmesão e ervas finas.', price: 'R$ 38,00' },
        { id: '3', name: 'Casquinha de pizza alho', image: require('../assets/casquinhapizzaalho.png'), descricao: 'Com ervas finas e parmesão.', price: 'R$ 44,00' },
        { id: '4', name: 'Porção filé aperitivo', image: require('../assets/porcaofile.png'), price: 'R$ 135,00' },        
    ];

    const files = [
        { id: '1', name: 'Filé a milanesa', image: require('../assets/filemilanesa.png'),descricao: 'Acompanha arroz branco.', serve: 'Serve até 3 pessoas', price: 'R$ 157,00' },
        { id: '2', name: 'Filé á milanesa - Meia porção', image: require('../assets/filemilanesa.png'), descricao: 'Acompanha arroz branco.', price: 'R$ 94,20' },
        { id: '3', name: 'Filé á parmegiana', image: require('../assets/fileparmegiana.png'), descricao: 'Com arroz branco e fritas.', serve: 'Serve 3 pessoas', price: 'R$ 183,00' },
        { id: '4', name: 'Filé á parmegiana - Meia porção', image: require('../assets/fileparmegiana.png'), descricao: 'Com arroz branco e fritas.', price: 'R$ 109,80' },
        ];
    const pizzassalgadasgrande = [
        { id: '1', name: 'GRANDE', image: require('../assets/placeholder.png'), price: 'R$ 98,00' },
        { id: '2', name: 'GRANDE 2 SABORES', image: require('../assets/placeholder.png'), price: 'R$ 98,00' },
        { id: '3', name: 'GRANDE 3 SABORES', image: require('../assets/placeholder.png'), price: 'R$ 98,01' }
    ];
    const acompanhamentos = [
        { id: '1', name: 'Arroz branco', image: require('../assets/arroz.png'), price: 'R$ 19,00' },
    ];
    const maispedidos = [
        { id: '1', name: 'Strogonoff de camarão', image: require('../assets/strogonoff.png'), price: 'R$ 224,00'},
        { id: '2', name: 'Strogonoff de camarão - Meia porção', image: require('../assets/strogonoff.png'), price: 'R$ 134,40' },
        { id: '3', name: 'Strogonoff de frango', image: require('../assets/strogonofffrango.png'), price: 'R$ 189,00' },
        { id: '4', name: 'Strogonoff de frango - Meia porção', image: require('../assets/strogonofffrango.png'), price: 'R$ 113,40' },
        { id: '5', name: 'Filé a milanesa', image: require('../assets/filemilanesa.png'), price: 'R$ 157,00' },

    ];
    
    // se o index for 0, o y é 0, se for 1, o y é 1 * 300, se for 2, o y é 2 * 400, o resto é index * 200
    const scrollToSection = (index) => {
        if (index === 0) {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
        } else if (index === 1) {
        scrollViewRef.current.scrollTo({ x: 0, y: 320, animated: true });
        } else if (index === 2) {
        scrollViewRef.current.scrollTo({ x: 0, y: 950, animated: true });
        } else if (index === 3) {
        scrollViewRef.current.scrollTo({ x: 0, y: 1510, animated: true });
        } else if (index === 4) {
        scrollViewRef.current.scrollTo({ x: 0, y: 2035, animated: true });
        } else if (index === 5) {
        scrollViewRef.current.scrollTo({ x: 0, y: 2740, animated: true });
        }
    };


    const backButtonColor = scrollY.interpolate({
        inputRange: [0, 150],
        outputRange: ['#fff', '#000'],
        extrapolate: 'clamp',
    });
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

            <Animated.View style={[styles.bannerContainer, {
                backgroundColor: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: ['#000', '#fff'],
                    extrapolate: 'clamp',
                }),
                transform: [{
                translateY: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, -150],
                    extrapolate: 'clamp',
                })
                }]
            }]}>
                <Animated.Image 
                source={require('../assets/camelosalao.png')} 
                style={[styles.bannerImage, {
                    opacity: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                    })
                }]}
                />
            </Animated.View>

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
                backgroundColor: scrollY.interpolate({
                inputRange: [0, 150],
                outputRange: ['#000', '#fff'],
                extrapolate: 'clamp',
                }),
                opacity: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                })
                }]}>CAMELO MOEMA</Animated.Text>
            </Animated.View>

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
                }]}>Pizzaria Camelo</Animated.Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
                {sections.map((section, index) => (
                    <TouchableOpacity key={section.id} style={styles.filterButton} onPress={() => scrollToSection(index)}>
                    <Text style={styles.filterText}>{section.name}</Text>
                    </TouchableOpacity>
                ))}
                </ScrollView>
            </Animated.View>

            <Animated.ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                ref={scrollViewRef}
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
                <Text style={styles.sectionTitle}>Os mais pedidos</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {maispedidos.slice(0, 5).map((restaurant) => (
                    <TouchableOpacity 
                        key={restaurant.id} 
                        style={{ marginBottom: 16, marginRight: 16 }}
                    >
                        <View style={styles.restaurantCardHorizontal}>
                        <Image source={restaurant.image} style={styles.restaurantImageHorizontal} />
                        <View style={styles.restaurantInfo}>
                        <Text style={styles.restaurantDetailsPrice}>{restaurant.price}</Text>
                        <Text style={styles.restaurantNameMaisPedidos} ellipsizeMode="tail">{restaurant.name}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={styles.sectionTitle}>Strogonoffs</Text>
                <View style={styles.pratosContainer}>
                {strogonoffs.map((restaurant, index) => (
                <TouchableOpacity 
                    key={restaurant.id} 
                    onPress={() => {
                        if (restaurant.name === 'Strogonoff de camarão') {
                            setModalVisible(true);
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
                        <View style={styles.restaurantInfoVertical}>
                        <View style={styles.nameRatingContainer}>
                            <Text style={styles.restaurantName}>{restaurant.name}</Text>
                        </View>
                            <Text style={styles.restaurantDetails}>{restaurant.descricao}</Text>
                            <Text style={styles.restaurantDetailsServe}>{restaurant.serve}</Text>
                            <Text style={styles.restaurantDetailsPrice}>{restaurant.price}</Text>
                        </View>
                        <Image source={restaurant.image} style={styles.restaurantImageVertical} />
                    </View>
                    </Animated.View>
                </TouchableOpacity>
                ))}
            </View>


                <Text style={styles.sectionTitle}>Porções</Text>
                <View style={styles.pratosContainer}>
                    {porcoes.map((restaurant, index) => (
                    <View 
                        key={restaurant.id} 
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
                            <View style={styles.restaurantInfoVertical}>
                            <View style={styles.nameRatingContainer}>
                                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                            </View>
                                <Text style={styles.restaurantDetails}>{restaurant.descricao}</Text>
                                <Text style={styles.restaurantDetailsServe}>{restaurant.serve}</Text>
                                <Text style={styles.restaurantDetailsPrice}>{restaurant.price}</Text>

                            </View>
                            <Image source={restaurant.image} style={styles.restaurantImageVertical} />
                        </View>
                        </Animated.View>
                    </View>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Filés</Text>
                <View style={styles.pratosContainer}>
                    {files.map((restaurant, index) => (
                    <View 
                        key={restaurant.id} 
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
                            <View style={styles.restaurantInfoVertical}>
                            <View style={styles.nameRatingContainer}>
                                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                            </View>
                                <Text style={styles.restaurantDetails}>{restaurant.descricao}</Text>
                                <Text style={styles.restaurantDetailsServe}>{restaurant.serve}</Text>
                                <Text style={styles.restaurantDetailsPrice}>{restaurant.price}</Text>

                            </View>
                            <Image source={restaurant.image} style={styles.restaurantImageVertical} />
                        </View>
                        </Animated.View>
                    </View>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Pizzas</Text>
                <View style={styles.pratosContainer}>
                    {pizzassalgadasgrande.map((restaurant, index) => (
                    <View 
                        key={restaurant.id} 
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
                            <View style={styles.restaurantInfoVertical}>
                            <View style={styles.nameRatingContainer}>
                                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                            </View>
                                <Text style={styles.restaurantDetails}>{restaurant.descricao}</Text>
                                <Text style={styles.restaurantDetailsServe}>{restaurant.serve}</Text>
                                <Text style={styles.restaurantDetailsPrice}>{restaurant.price}</Text>

                            </View>
                            <Image source={restaurant.image} style={styles.restaurantImageVertical} />
                        </View>
                        </Animated.View>
                    </View>
                    ))}
                </View>
                <Text style={styles.sectionTitle}>Acompanhametos</Text>
                <View style={styles.pratosContainer}>
                    {acompanhamentos.map((restaurant, index) => (
                    <View 
                        key={restaurant.id} 
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
                            <View style={styles.restaurantInfoVertical}>
                            <View style={styles.nameRatingContainer}>
                                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                            </View>
                                <Text style={styles.restaurantDetails}>{restaurant.descricao}</Text>
                                <Text style={styles.restaurantDetailsServe}>{restaurant.serve}</Text>
                                <Text style={styles.restaurantDetailsPrice}>{restaurant.price}</Text>

                            </View>
                            <Image source={restaurant.image} style={styles.restaurantImageVertical} />
                        </View>
                        </Animated.View>
                    </View>
                    ))}
                </View>




                </Animated.View>
            </Animated.ScrollView>
            {modalVisible && <StrogonoffModal visible={modalVisible} onClose={() => setModalVisible(false)} />}
            </SafeAreaView>
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
    height: 190 + StatusBar.currentHeight,
    resizeMode: 'cover',
  },
  scrollView: {
    marginTop: 0,
  },
  scrollViewContent: {
    paddingTop: height * 0.30,
    paddingHorizontal: 16,
  },
  fixedHeader: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight, // Ajustar para iOS e Android
    left: 0,
    right: 0,
    height: 50,
    zIndex: 3, // Certifique-se de que o header tenha um zIndex maior que o fixedFilters
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
  filtersScroll: {
    flexDirection: 'row',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  horizontalScroll: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  pratosContainer: {
    marginTop: 10,
  },
  restaurantCard: {
    flexDirection: 'row',
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
  restaurantCardHorizontal: {
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
  restaurantImageHorizontal: {
    width: "100%",
    height: 120,
    resizeMode: 'cover',
  },
  restaurantImageVertical: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  restaurantInfo: {
    padding: 10,
  },
  restaurantInfoVertical: {
    padding: 10,
    flex: 1,
  },
  nameRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 120,
  },
  restaurantNameMaisPedidos: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 120,
  },
  restaurantRating: {
    fontSize: 14,
    color: '#bd8a00',
    marginLeft: 8,
  },
  restaurantDetails: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  restaurantDetailsPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 4,
  },
  restaurantDetailsServe: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
