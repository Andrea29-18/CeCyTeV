const express = require("express");
const cors = require('cors'); // Importa el paquete cors

const qrRoutes = require('./router/qrRouter');

const PORT = process.env.PORT || 3001;

const app = express();

// Habilitar CORS solo para el frontend en localhost:3000
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json()); 

app.use('/qr', qrRoutes);

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
