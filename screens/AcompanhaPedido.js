import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const AcompanhaPedido = () => {
    const [driverLocation, setDriverLocation] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(true);

    const userLocation = {
        latitude: -23.5632103,
        longitude: -46.6542505,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const fetchDriverLocation = async () => {
        try {
            const response = await fetch('http://52.205.25.205/bag/1/');
            const data = await response.json();
            const [latitude, longitude] = data.gps.split(',').map(coord => parseFloat(coord.trim()));
            setDriverLocation({ latitude, longitude });
            setTemperature(data.temperature);
        } catch (error) {
            console.error('Error fetching driver location:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDriverLocation();
        const interval = setInterval(fetchDriverLocation, 10000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E4002B" />
                <Text style={styles.loadingText}>Carregando localização...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acompanhe seu pedido</Text>
            <MapView
                style={styles.map}
                initialRegion={userLocation}
            >
                {driverLocation && (
                    <Marker coordinate={driverLocation}>
                        <View style={styles.markerContainer}>
                            <Image
                                source={require('../assets/acai.png')}
                                style={styles.markerImage}
                            />
                            <Text style={styles.temperatureText}>{temperature}°C</Text>
                        </View>
                    </Marker>
                )}
                <Marker coordinate={userLocation}>
                    <Image
                        source={require('../assets/acai.png')}
                        style={styles.markerImage}
                    />
                </Marker>
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    map: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: '#E4002B',
    },
    markerContainer: {
        alignItems: 'center',
    },
    markerImage: {
        width: 40,
        height: 40,
    },
    temperatureText: {
        marginTop: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        fontSize: 14,
        color: 'black',
    },
});

export default AcompanhaPedido;
