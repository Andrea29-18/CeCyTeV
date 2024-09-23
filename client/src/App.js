// src/App.js
import React from 'react';
import GenerateQR from './components/GenerateQR';
import ScanQR from './components/ScanQR';
import Ubicacion from './components/Ubicacion';

const App = () => {
    return (
        <div style={styles.appContainer}>
            <h1 style={styles.mainTitle}>QR Generator, Scanner & Ubicación</h1>
            <div style={styles.section}>
                <GenerateQR />
            </div>
            <div style={styles.section}>
                <ScanQR />
            </div>
            <div style={styles.section}>
                <Ubicacion />
            </div>
        </div>
    );
};

const styles = {
    appContainer: {
        textAlign: 'center',
        padding: '30px',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
    },
    mainTitle: {
        fontSize: '32px',
        color: '#2c3e50',
        marginBottom: '40px',
    },
    section: {
        margin: '30px 0',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
};

export default App;
