const QRCode = require('qrcode');
let qrStock = []; // Almacenamiento en memoria

// Crear un QR y agregarlo al stock
const createQR = () => {
    const qrId = `${Math.random().toString(36).substring(2, 15)}`;  // Generar un ID único
    const qrData = `http://localhost:3001/qr/scan/${qrId}`;  // URL con el ID

    qrStock.push({ qrId, used: false });  // Agregar el QR al stock
    console.log("QR creado y agregado al stock:", qrId);  // Log para ver el ID generado

    return { qrId, url: qrData };  // Retornar el ID y la URL
};

// Verificar si el QR ya ha sido usado
const checkQR = (qrId) => {
    console.log("Verificando QR con ID:", qrId);
    console.log("Stock actual:", qrStock);

    const qr = qrStock.find(item => item.qrId === qrId);  // Buscar el QR en el stock

    if (!qr) {
        console.log("QR no encontrado, es inválido.");
        return 'invalid';  // Si no existe, es inválido
    }

    if (qr.used) {
        console.log("QR ya utilizado.");
        return 'used';  // Si ya fue usado, es inválido
    }

    qr.used = true;  // Marcar el QR como utilizado si es válido
    console.log("QR válido y marcado como utilizado:", qrId);
    return 'success';  // QR válido
};

// Marcar un QR como usado
const markAsUsed = (qrId) => {
    const qr = qrStock.find(item => item.qrId === qrId);
    if (qr) {
        qr.used = true;
    }
};

module.exports = {
    createQR,
    checkQR,
    markAsUsed
};
