const express = require("express");
const userRoutes = require("./routes/userRoutes"); // Importer les routes utilisateur

const app = express();
app.use(express.json()); // Middleware pour traiter le JSON dans les requêtes

// Ajouter le préfixe /api avant les routes utilisateur
app.use('/api/users', userRoutes); // Toutes les routes utilisateurs commenceront par /api/users

module.exports = app;
