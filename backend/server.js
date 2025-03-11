require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const routes = require('./routes'); // Import des routes

const app = express();
const PORT = process.env.PORT || 5000;

// 🔹 Middlewares globaux
app.use(cors());          // Sécurise les accès cross-origin
app.use(helmet());        // Protège contre certaines vulnérabilités
app.use(morgan('dev'));   // Logger des requêtes
app.use(compression());   // Active la compression Gzip
app.use(express.json());  // Permet de parser les requêtes JSON
app.use(express.urlencoded({ extended: true })); // Pour les formulaires

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
