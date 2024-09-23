const express = require('express');
const { generateQR, scanQR } = require('../controller/qrController');

const router = express.Router();

// Ruta para generar el QR
router.get('/generate', generateQR);

// Ruta para escanear el QR
router.get('/scan/:qrId', scanQR);

module.exports = router;
