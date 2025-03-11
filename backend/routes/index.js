const express = require('express');
const router = express.Router();
const usersRoutes = require('./users'); // Import des routes utilisateurs

// 🔹 Définition des routes
router.use('/users', usersRoutes); // Toutes les routes users.js seront sous /api/users

// 🔹 Route de test pour vérifier si l'API est en ligne
router.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API 🚀" });
});

module.exports = router;
