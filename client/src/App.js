// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GenerateQR from './components/GenerateQR';
import ScanQR from './components/ScanQR';
import './App.css';  // Importar los estilos

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/generate">Generar QR</Link></li>
                    <li><Link to="/scan">Escanear QR</Link></li>
                </ul>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/generate" element={<GenerateQR />} />
                    <Route path="/scan" element={<ScanQR />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
