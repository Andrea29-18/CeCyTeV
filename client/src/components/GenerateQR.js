// src/components/GenerateQR.js
import React, { useState } from 'react';

const GenerateQR = () => {
    const [qrCode, setQrCode] = useState(null);

    const generateQRCode = async () => {
        try {
            const response = await fetch('http://localhost:3001/qr/generate');
            const qrHTML = await response.text();
            setQrCode(qrHTML);
        } catch (error) {
            console.error('Error al generar el código QR:', error);
        }
    };

    return (
        <div>
            <h2>Generar QR Code</h2>
            <button onClick={generateQRCode}>Generar QR</button>
            <div dangerouslySetInnerHTML={{ __html: qrCode }} />
        </div>
    );
};

export default GenerateQR;
