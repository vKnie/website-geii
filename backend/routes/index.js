const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API 🚀" });
});

// Importation d'autres routes (ex: utilisateurs)
const usersRoutes = require('./users');
router.use('/users', usersRoutes);

module.exports = router;
