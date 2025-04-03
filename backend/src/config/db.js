const mysql = require("mysql2");
require("dotenv").config(); // Charger les variables d'environnement

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  console.log('DB_HOST:', process.env.DB_HOST);
  console.log('DB_PORT:', process.env.DB_PORT);
  console.log('DB_USER:', process.env.DB_USER);
  console.log('DB_NAME:', process.env.DB_NAME);
  if (err) {
    console.error("❌ Erreur de connexion à MariaDB:", err.code);
    console.error("Détails de l'erreur:", err);
    return;
  }
  console.log("✅ Connecté à MariaDB !");
});

module.exports = db;
