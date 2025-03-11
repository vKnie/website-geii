require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const routes = require('./routes'); // Import des routes
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// 🔹 Middlewares globaux
app.use(cors());          
app.use(helmet());        
app.use(morgan('dev', {
    skip: (req) => req.url === '/favicon.ico' // ✅ Ignore le log du favicon
}));
app.use(compression());   
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

// 🔹 Routes principales
app.use('/api', routes);

// 🔹 Gestion des erreurs
app.use((req, res, next) => {
    res.status(404).json({ message: "Route non trouvée" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Erreur interne du serveur" });
});

// 🔹 Lancement du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
