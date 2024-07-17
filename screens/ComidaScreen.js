import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Image, Dimensions, Platform } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const StrogonoffModal = ({ visible, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
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

    const toggleSelection = (item) => {
        setSelectedItems((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    if (!visible) return null;

    return (
        <SafeAreaView style={styles.overlay}>
            <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
                <TouchableOpacity onPress={() => {
                    Animated.timing(translateY, {
                        toValue: height,
                        duration: 500,
                        useNativeDriver: true,
                    }).start(() => {
                        onClose();
                    });
                }} style={styles.closeIcon}>
                    <AntDesign name="down" size={24} color="black" />
                </TouchableOpacity>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}
                    onScrollEndDrag={handleScrollEnd}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    <Image source={require('../assets/kentibag.jpg')} style={styles.banner} />
                    <Text style={styles.type}>Strogonoff de Camarão</Text>
                    <Text style={styles.description}>Delicioso strogonoff de camarão com arroz branco e batata palha.</Text>
                    
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Entradas</Text>
                        <View style={styles.foodItem}>
                            <Text style={styles.foodName}>Salada Caesar</Text>
                            <TouchableOpacity style={styles.addButton} onPress={() => toggleSelection('Salada Caesar')}>
                                <FontAwesome name={selectedItems.includes('Salada Caesar') ? "circle" : "circle-thin"} size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.foodItem}>
                            <Text style={styles.foodName}>Bruschetta</Text>
                            <TouchableOpacity style={styles.addButton} onPress={() => toggleSelection('Bruschetta')}>
                                <FontAwesome name={selectedItems.includes('Bruschetta') ? "circle" : "circle-thin"} size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Pratos Principais</Text>
                        <View style={styles.foodItem}>
                            <Text style={styles.foodName}>Strogonoff de Frango</Text>
                            <TouchableOpacity style={styles.addButton}>
                                <AntDesign name="plus" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.foodItem}>
                            <Text style={styles.foodName}>Strogonoff de Carne</Text>
                            <TouchableOpacity style={styles.addButton}>
                                <AntDesign name="plus" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.hud}>
                    <View style={styles.quantityBox}>
                        <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                            <AntDesign name="minus" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                            <AntDesign name="plus" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addButtonHud}>
                        <Text style={styles.addText}>Adicionar</Text>
                        <Text style={styles.priceText}>R$ 29,90</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    container: {
        position: 'absolute',
        top: 50,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    scrollView: {
        paddingTop: 50,
        marginBottom: 50,
    },
    scrollViewContent: {
        paddingBottom: 200,
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1001,
    },
    banner: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    type: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    },
    description: {
        fontSize: 18,
        marginHorizontal: 20,
    },
    section: {
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#d3d3d3',
        padding: 10,
    },
    foodItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    foodName: {
        fontSize: 18,
    },
    addButton: {
        padding: 10,
    },
    hud: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        position: 'absolute',
        bottom: 30,
        width: '100%',
        backgroundColor: 'white',
    },
    quantityBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        padding: 10,
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    addButtonHud: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E4002B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    addText: {
        color: 'white',
        fontSize: 18,
        marginRight: 10,
    },
    priceText: {
        color: 'white',
        fontSize: 18,
    },
});

export default StrogonoffModal;
