const { createQR, checkQR, markAsUsed } = require('../service/qrService');
const { sendMessage } = require('../service/whatService');
const QRCode = require('qrcode');

// Generar un QR dinámicamente y agregarlo al stock
const generateQR = (req, res) => {
    const qrData = createQR();  // Usar createQR para generar el QR y agregarlo al stock

    QRCode.toDataURL(qrData.url, (err, url) => {
        if (err) {
            res.status(500).send('Error al generar el código QR');
        } else {
            res.send(`<img src="${url}" alt="QR Code">`);
        }
    });
};

// Escanear el QR
const scanQR = (req, res) => {
    const { qrId } = req.params;
    const result = checkQR(qrId);

    if (result === 'used') {
        return res.status(400).send('Este QR ya ha sido utilizado.');
    } else if (result === 'invalid') {
        return res.status(404).send('QR inválido.');
    } else {
        // Enviar el mensaje "Ya llegué" cuando el QR es válido
        sendMessage("+522283340036", "El Alumno: Jesus Xolo, ha ingresado al platel de catemaco")
            .then(() => {
                markAsUsed(qrId);  // Marcar el QR como usado
                res.send('Mensaje enviado: Ya llegué.');
            })
            .catch((err) => {
                console.error('Error al enviar el mensaje:', err);
                res.status(500).send('Error al enviar el mensaje');
            });
    }
};

module.exports = {
    generateQR,
    scanQR
};
