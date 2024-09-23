// src/components/Ubicacion.js
import React, { useState } from 'react';

const Ubicacion = () => {
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lng: longitude });
                    setError(null);
                },
                (error) => {
                    setError("Error al obtener la ubicación");
                }
            );
        } else {
            setError("La geolocalización no es compatible con este navegador.");
        }
    };

    return (
        <div style={styles.container}>
            <h2>Encuentra tu Ubicación</h2>
            <button onClick={getLocation} style={styles.button}>
                Obtener Ubicación
            </button>

            {location.lat && location.lng ? (
                <div>
                    <p><strong>Latitud:</strong> {location.lat}</p>
                    <p><strong>Longitud:</strong> {location.lng}</p>
                </div>
            ) : (
                error && <p>{error}</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    }
};

export default Ubicacion;
