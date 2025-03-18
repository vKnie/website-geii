const db = require('../config/db'); // Importer la connexion à la base de données

// Ajouter un utilisateur
const addUser = (first_name, last_name, email, password, role = 'public', callback) => {
  const query = `
    INSERT INTO users (first_name, last_name, email, password, role)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [first_name, last_name, email, password, role], (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de l'ajout de l'utilisateur:", err);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

// Récupérer un utilisateur par ID
const getUserById = (id, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de la récupération de l'utilisateur:", err);
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
};

// Récupérer tous les utilisateurs
const getAllUsers = (callback) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de la récupération des utilisateurs:", err);
      return callback(err, null);
    }
    return callback(null, results); // Retourne tous les utilisateurs sous forme de tableau
  });
};

// Récupérer un utilisateur par email
const getUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de la récupération de l'utilisateur:", err);
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
};

// Mettre à jour un utilisateur
const updateUser = (id, first_name, last_name, email, password, role, callback) => {
  const query = `
    UPDATE users
    SET first_name = ?, last_name = ?, email = ?, password = ?, role = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
  db.query(query, [first_name, last_name, email, password, role, id], (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de la mise à jour de l'utilisateur:", err);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

// Supprimer un utilisateur
const deleteUser = (id, callback) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("❌ Erreur lors de la suppression de l'utilisateur:", err);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

module.exports = {
  addUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  updateUser,
  deleteUser
};
