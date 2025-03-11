const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// 🔹 Récupérer tous les utilisateurs
router.get('/', (req, res) => {
    res.json(users);
});

// 🔹 Récupérer un utilisateur par son ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
});

module.exports = router;
