// src/components/Ubicacion.js
import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '15px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
};

const Ubicacion = () => {
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik',
    });

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lng: longitude });
                    setError(null);
                },
                () => {
                    setError("Error al obtener la ubicación");
                }
            );
        } else {
            setError("La geolocalización no es compatible con este navegador.");
        }
    };

    const renderMap = useCallback(() => {
        if (!location.lat || !location.lng) return null;

        return (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={15}
            >
                <Marker position={location} />
            </GoogleMap>
        );
    }, [location]);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Encuentra tu Ubicación</h2>
            <button onClick={getLocation} style={styles.button}>
                Obtener Ubicación
            </button>

            {location.lat && location.lng ? (
                isLoaded ? renderMap() : <p style={styles.loadingText}>Cargando el mapa...</p>
            ) : (
                error && <p style={styles.errorText}>{error}</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px',
    },
    button: {
        padding: '12px 25px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    loadingText: {
        fontSize: '18px',
        color: '#555',
    },
    errorText: {
        fontSize: '18px',
        color: '#e74c3c',
    },
};

export default Ubicacion;
