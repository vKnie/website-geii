const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel'); // Le modèle que nous avons créé précédemment

// Ajouter un utilisateur
router.post('/add', (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;
  userModel.addUser(first_name, last_name, email, password, role, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Erreur lors de l'ajout de l'utilisateur", error: err });
    }
    return res.status(201).json({ message: 'Utilisateur ajouté avec succès', userId: results.insertId });
  });
});

// Récupérer un utilisateur par ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  userModel.getUserById(id, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error: err });
    }
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    return res.status(200).json(user);
  });
});

// Récupérer tous les utilisateurs
router.get('/', (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: err });
    }
    return res.status(200).json(users); // Retourne tous les utilisateurs sous forme de tableau JSON
  });
});

// Mettre à jour un utilisateur
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, role } = req.body;
  userModel.updateUser(id, first_name, last_name, email, password, role, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: err });
    }
    return res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
  });
});

// Supprimer un utilisateur
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur', error: err });
    }
    return res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  });
});

module.exports = router;
