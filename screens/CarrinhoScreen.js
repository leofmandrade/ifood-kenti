// CarrinhoScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const CarrinhoScreen = ({ visible, onClose }) => {
    const translateY = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: height,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const handleScrollEnd = (event) => {
        const { contentOffset } = event.nativeEvent;
        if (contentOffset.y <= 0) {
            Animated.timing(translateY, {
                toValue: height,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                onClose();
            });
        }
    };

    if (!visible) return null;

    return (
        <SafeAreaView style={styles.overlay}>
            <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}
                    onScrollEndDrag={handleScrollEnd}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                            <AntDesign name="down" size={24} color="#E4002B" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>SACOLA</Text>
                        <Text style={styles.limparTitle}>Limpar</Text>

                    </View>
                    <View style={styles.cartItem}>
                        
                        <Image source={require('../assets/strogonoff.png')} style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>Strogonoff de Camarão</Text>
                            <Text style={styles.itemDescription}>Acompanha arroz branco e batata palha.</Text>
                            <View style={styles.itemPriceContainer}>
                                <Text style={styles.itemPromoPrice}>R$ 224,00</Text>
                            </View>
                        </View>
                        <View style={styles.itemActions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <AntDesign name="delete" size={14} color="#E4002B" />
                                {/* mais um delete, mas em bold*/}
                                

                            </TouchableOpacity>
                            <Text style={styles.itemQuantity}>1</Text>
                            <TouchableOpacity style={styles.actionButton}>
                                <AntDesign name="plus" size={14} color="#E4002B" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.addMoreItemsButton}>
                        <Text style={styles.addMoreItemsText}>Adicionar mais itens</Text>
                    </TouchableOpacity>

                    {/* Subtotal, Taxa de entrega, Total. faça um view maior com column e esses menores um row com o titulo e o valor */}
                    
                    <View style={styles.resumoPedidoContainer}>
                        <Text style={styles.suggestedItemsTitle}>Resumo de valores</Text>
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text style={styles.subtotalValue}>R$ 224,00</Text>
                        </View>
                        <View style={styles.taxaEntregaContainer}>
                            <Text style={styles.taxaEntregaText}>Taxa de entrega</Text>
                            <Text style={styles.taxaEntregaValue}>R$ 12,00</Text>
                        </View>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalTextPrice}>Total</Text>
                            <Text style={styles.totalValue}>R$ 236,00</Text>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.addToCartBox}>
                    <View>
                        <Text style={styles.totalText}>Total com a entrega</Text>
                        <Text style={styles.priceCarrinhoText}>R$236,00</Text>
                    </View>
                    {/* "Ver Sacola" #E4002B button with white text */}
                    <TouchableOpacity style={styles.verSacolaButton}>
                        <Text style={styles.verSacolaText}>Continuar</Text>
                      </TouchableOpacity>

                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        zIndex: 1000,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    scrollView: {
        flex: 1,
    },
    resumoPedidoContainer: {
        padding: 10,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    subtotalText: {
        color: 'gray',
        fontFamily: 'iFoodRCTextos-Regular',
    },
    subtotalValue: {
        color: 'gray',
        fontFamily: 'iFoodRCTextos-Regular',
    },
    taxaEntregaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    taxaEntregaText: {
        color: 'gray',
        fontFamily: 'iFoodRCTextos-Regular',
    },
    taxaEntregaValue: {
        color: 'gray',
        fontFamily: 'iFoodRCTextos-Regular',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    totalTextPrice: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'iFoodRCTextos-Bold',
    },
    totalValue: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'iFoodRCTextos-Bold',
    },
    scrollViewContent: {
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Bold',
    },
    limparTitle: {
        fontSize: 16,
        color: '#E4002B',
        fontFamily: 'iFoodRCTextos-Regular',
    },
    cartItem: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    totalText: {
        color: 'black',
        fontFamily: 'iFoodRCTextos-Regular',
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 20,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Bold',
    },
    itemDescription: {
        color: '#666',
        marginVertical: 5,
        fontFamily: 'iFoodRCTextos-Regular',
    },
    itemPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemPromoPrice: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'iFoodRCTextos-Bold',
        marginRight: 5,
    },
    itemActions: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 30,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        padding: 5,
    },

    actionButton: {
        marginHorizontal: 5,
    },
    itemQuantity: {
        fontSize: 16,
        marginHorizontal: 4,
        fontFamily: 'iFoodRCTextos-Regular',
    },
    addMoreItemsButton: {
        padding: 20,
        marginBottom: 40,
        alignItems: 'center',
    },
    addMoreItemsText: {
        color: '#E4002B',
        fontFamily: 'iFoodRCTextos-Bold',
    },
    verSacolaButton: {
      backgroundColor: '#E4002B',
      paddingVertical: 15,
      borderRadius: 8,
      paddingHorizontal: 42,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addToCartBox: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'white',
      padding: 16,
      paddingHorizontal: 20,
      paddingBottom: 40,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      // border just on top with a grey color and a shadow
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      shadowColor: '#000',
      shadowOpacity: 0.3,
  
    },
    priceCarrinhoText: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'iFoodRCTextos-Bold',
    },
    verSacolaText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
    },
    suggestedItemsTitle: {
        fontSize: 18,
        fontFamily: 'iFoodRCTextos-Bold',
        marginBottom: 10,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: 'white',
    },
    continueButton: {
        backgroundColor: '#E4002B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CarrinhoScreen;
