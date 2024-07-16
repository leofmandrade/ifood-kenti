import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const StrogonoffModal = ({ visible, onClose }) => {
    const translateY = useRef(new Animated.Value(1000)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: 1000,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const handleScrollEnd = (event) => {
        const { contentOffset } = event.nativeEvent;
        // Fechar o modal se o usuário rolar para cima e atingir o limite
        if (contentOffset.y <= 0) {
            Animated.timing(translateY, {
                toValue: 1000,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                onClose();
            });
        }
    };

    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
                <TouchableOpacity onPress={() => {
                    Animated.timing(translateY, {
                        toValue: 1000,
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
                    onScrollEndDrag={handleScrollEnd}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.text}>Strogonoff de Camarão</Text>
                    <Text style={styles.content}>Aqui vai o conteúdo do strogonoff...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo..x'.</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Mais conteúdo...</Text>
                    <Text style={styles.content}>Ainda mais conteúdo...</Text>
                    <Text style={styles.content}>Conteúdo extra...</Text>
                </ScrollView>
            </Animated.View>
        </View>
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
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1001,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    },
    content: {
        fontSize: 18,
        margin: 20,
    },
});

export default StrogonoffModal;
