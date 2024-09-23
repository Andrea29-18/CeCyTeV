// src/components/ScanQR.js
import React, { useState } from 'react';

const ScanQR = () => {
    const [qrId, setQrId] = useState('');
    const [message, setMessage] = useState('');

    const scanQRCode = async () => {
        try {
            const response = await fetch(`http://localhost:3001/qr/scan/${qrId}`);
            const result = await response.text();
            setMessage(result);
        } catch (error) {
            console.error('Error al escanear el código QR:', error);
            setMessage('Error al escanear el código QR');
        }
    };

    return (
        <div>
            <h2>Escanear QR Code</h2>
            <input 
                type="text" 
                value={qrId} 
                onChange={(e) => setQrId(e.target.value)} 
                placeholder="Ingrese el ID del QR" 
            />
            <button onClick={scanQRCode}>Escanear QR</button>
            <p>{message}</p>
        </div>
    );
};

export default ScanQR;
