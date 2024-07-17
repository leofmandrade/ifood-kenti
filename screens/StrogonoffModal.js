import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Image, Dimensions, Platform, TextInput } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
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

    const handleAdd = () => {
        Animated.timing(translateY, {
            toValue: height,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            onClose();
        });
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
                    <Image source={require('../assets/strogonoff.png')} style={styles.banner} />
                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                        <AntDesign name="down" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>Strogonoff de Camarão</Text>
                        <Text style={styles.description}>Acompanha arroz branco e batata palha. Serve 2 pessoas.</Text>
                        <Text style={styles.descriptionServe}>Serve até 2 pessoas</Text>

                        <Text style={styles.price}>R$ 224,00</Text>
                        <View style={styles.vendorInfo}>
                            <View style={styles.vendorInfoRow}>
                            <View style={styles.vendorInfoRow2}>
                                <MaterialCommunityIcons name="storefront-outline" size={24} color="black" />
                                <View style={styles.vendorTextContainer}>   
                                    <Text style={styles.vendorName}>Pizzaria Camelo</Text>
                                </View>
                            </View>
                                <Text style={[styles.vendorRating]}>4.8</Text>
                            </View>
                            <View style={styles.vendorInfoRow3}>
                            <Text style={[styles.deliveryTime, styles.dashedBorder]}>59-69 min • R$ 13,00</Text>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Alguma observação?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: tirar a cebola, maionese à parte etc."
                                maxLength={140}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                            <AntDesign name="minus" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                            <AntDesign name="plus" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                        <Text style={styles.addButtonText}>Adicionar</Text>
                        <Text style={styles.addButtonPrice}>R$ 224,00</Text>
                    </TouchableOpacity>
                </View>
                
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'white',
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
    scrollViewContent: {
        paddingBottom: 100,
    },
    banner: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
    },
    infoContainer: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontFamily: 'iFoodRCTextos-Bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
        color: '#555',
        marginBottom: 5,
    },
    descriptionServe: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
        color: '#000',
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        fontFamily: 'iFoodRCTextos-Regular',
        color: '#555',
        marginBottom: 20,
    },
    vendorInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
    },
    vendorInfoRow3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    vendorInfoRow2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    vendorInfo: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        flexDirection: 'column',
        marginBottom: 20,
    },

    vendorTextContainer: {
        padding: 5,
        marginRight: 10,
    },
    vendorName: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
        marginLeft: 5,
    },
    vendorRating: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
        color: '#ffcc00',
        borderRadius: 5,
        padding: 5,
    },
    deliveryTime: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
        color: '#555',
        padding: 5,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        fontFamily: 'iFoodRCTextos-Regular',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: 'white',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        padding: 10,
    },
    quantityText: {
        fontSize: 18,
        fontFamily: 'iFoodRCTextos-Regular',
        marginHorizontal: 10,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E4002B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'iFoodRCTextos-Regular',
        marginRight: 10,
    },
    addButtonPrice: {
        color: 'white',
    fontFamily: 'iFoodRCTextos-Regular',
        fontSize: 18,
    },
});

export default StrogonoffModal;
