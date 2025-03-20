const express = require("express");
const userRoutes = require("./routes/userRoutes");
const formationsRoutes = require("./routes/formationsRoutes");

const app = express();
app.use(express.json());

// Ajouter le préfixe /api avant les routes utilisateur
app.use('/api/users', userRoutes);
app.use('/api/formations', formationsRoutes);

module.exports = app;
