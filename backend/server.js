// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration de la base de données
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    process.exit(1);
  }
  console.log('Connecté à la base de données MySQL');
  
  // Créer les tables si elles n'existent pas
  createTables();
});

// Fonction pour créer les tables
function createTables() {
  // Table des utilisateurs
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM('student', 'teacher', 'staff', 'company', 'public') DEFAULT 'student',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

  // Table des formations
  const createFormationsTable = `
    CREATE TABLE IF NOT EXISTS formations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      curriculum TEXT,
      objectives TEXT,
      admission_requirements TEXT,
      career_outcomes TEXT,
      skills_acquired TEXT,
      duration_and_structure TEXT,
      further_studies TEXT,
      contact_info TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

  db.query(createUsersTable, (err) => {
    if (err) console.error('Erreur création table users:', err);
    else console.log('Table users créée/vérifiée');
  });

  db.query(createFormationsTable, (err) => {
    if (err) console.error('Erreur création table formations:', err);
    else console.log('Table formations créée/vérifiée');
    
    // Insérer des données par défaut pour les formations
    insertDefaultFormations();
  });
}

// Insérer des formations par défaut
function insertDefaultFormations() {
  const checkFormations = 'SELECT COUNT(*) as count FROM formations';
  
  db.query(checkFormations, (err, results) => {
    if (err) {
      console.error('Erreur vérification formations:', err);
      return;
    }
    
    if (results[0].count === 0) {
      const defaultFormations = [
        {
          name: 'BUT GEII',
          description: 'Bachelor Universitaire de Technologie en Génie Électrique et Informatique Industrielle',
          curriculum: 'Formation en 3 ans avec des enseignements en électronique, automatique, informatique industrielle...',
          objectives: 'Former des techniciens supérieurs polyvalents dans les domaines de l\'électronique et de l\'informatique industrielle',
          admission_requirements: 'Baccalauréat scientifique ou technologique',
          career_outcomes: 'Technicien en bureau d\'études, maintenance, production industrielle...',
          skills_acquired: 'Électronique, automatisation, programmation, gestion de projets...',
          duration_and_structure: '3 ans, 6 semestres, stages en entreprise',
          further_studies: 'Écoles d\'ingénieurs, masters universitaires...',
          contact_info: 'geii@iut.fr - 01 23 45 67 89'
        },
        {
          name: 'LP MIAW',
          description: 'Licence Professionnelle Métiers de l\'Informatique : Administration et sécurité des systèmes et des réseaux',
          curriculum: 'Spécialisation en administration système et sécurité informatique',
          objectives: 'Former des administrateurs système et réseau spécialisés en sécurité',
          admission_requirements: 'BAC+2 en informatique',
          career_outcomes: 'Administrateur système, expert en cybersécurité...',
          skills_acquired: 'Administration Linux/Windows, sécurité réseau, virtualisation...',
          duration_and_structure: '1 an en alternance',
          further_studies: 'Masters en sécurité informatique',
          contact_info: 'miaw@iut.fr'
        },
        {
          name: 'LP ABDD',
          description: 'Licence Professionnelle Administration de Bases de Données',
          curriculum: 'Spécialisation en gestion et administration de bases de données',
          objectives: 'Former des spécialistes en bases de données',
          admission_requirements: 'BAC+2 en informatique',
          career_outcomes: 'Administrateur de bases de données, développeur...',
          skills_acquired: 'SQL, NoSQL, optimisation, sécurité des données...',
          duration_and_structure: '1 an avec projet professionnel',
          further_studies: 'Masters en informatique',
          contact_info: 'abdd@iut.fr'
        },
        {
          name: 'LP GTHBT',
          description: 'Licence Professionnelle Gestion Technique du Bâtiment',
          curriculum: 'Formation aux technologies du bâtiment intelligent',
          objectives: 'Former aux métiers de la gestion technique du bâtiment',
          admission_requirements: 'BAC+2 technique',
          career_outcomes: 'Gestionnaire technique, maintenance de bâtiments...',
          skills_acquired: 'Domotique, efficacité énergétique, maintenance...',
          duration_and_structure: '1 an avec stages',
          further_studies: 'Spécialisations en énergie',
          contact_info: 'gthbt@iut.fr'
        }
      ];

      defaultFormations.forEach(formation => {
        const insertSQL = 'INSERT INTO formations SET ?';
        db.query(insertSQL, formation, (err) => {
          if (err) console.error('Erreur insertion formation:', err);
        });
      });
      
      console.log('Formations par défaut insérées');
    }
  });
}

// === ROUTES UTILISATEURS ===

// POST - Connexion utilisateur
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Validation des données
  if (!email || !password) {
    return res.status(400).json({ error: 'Email et mot de passe requis' });
  }
  
  try {
    // Rechercher l'utilisateur par email
    const findUserSQL = 'SELECT id, first_name, last_name, email, password, role FROM users WHERE email = ?';
    
    db.query(findUserSQL, [email], async (err, results) => {
      if (err) {
        console.error('Erreur recherche utilisateur:', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      
      if (results.length === 0) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
      }
      
      const user = results[0];
      
      // Vérifier le mot de passe
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
      }
      
      // Connexion réussie - retourner les données utilisateur (sans le mot de passe)
      const userData = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role
      };
      
      res.json({
        message: 'Connexion réussie',
        user: userData
      });
    });
  } catch (error) {
    console.error('Erreur authentification:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// GET - Récupérer tous les utilisateurs
app.get('/api/users', (req, res) => {
  const sql = 'SELECT id, first_name, last_name, email, role, created_at FROM users ORDER BY created_at DESC';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur récupération utilisateurs:', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});

// POST - Créer un nouvel utilisateur
app.post('/api/users', async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;
  
  // Validation des données
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ error: 'Tous les champs obligatoires doivent être remplis' });
  }
  
  try {
    // Vérifier si l'email existe déjà
    const checkEmail = 'SELECT id FROM users WHERE email = ?';
    db.query(checkEmail, [email], async (err, results) => {
      if (err) {
        console.error('Erreur vérification email:', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      
      if (results.length > 0) {
        return res.status(400).json({ error: 'Cette adresse email est déjà utilisée' });
      }
      
      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Insérer le nouvel utilisateur
      const insertSQL = 'INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)';
      db.query(insertSQL, [first_name, last_name, email, hashedPassword, role || 'student'], (err, results) => {
        if (err) {
          console.error('Erreur création utilisateur:', err);
          return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
        }
        
        res.status(201).json({ 
          message: 'Utilisateur créé avec succès',
          userId: results.insertId 
        });
      });
    });
  } catch (error) {
    console.error('Erreur hashage mot de passe:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// PUT - Mettre à jour un utilisateur
app.put('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, email, password, role } = req.body;
  
  try {
    let updateSQL = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, role = ?';
    let values = [first_name, last_name, email, role];
    
    // Si un nouveau mot de passe est fourni, l'inclure dans la mise à jour
    if (password && password.trim() !== '') {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateSQL += ', password = ?';
      values.push(hashedPassword);
    }
    
    updateSQL += ' WHERE id = ?';
    values.push(userId);
    
    db.query(updateSQL, values, (err, results) => {
      if (err) {
        console.error('Erreur mise à jour utilisateur:', err);
        return res.status(500).json({ error: 'Erreur lors de la mise à jour' });
      }
      
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      
      res.json({ message: 'Utilisateur mis à jour avec succès' });
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// DELETE - Supprimer un utilisateur
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  
  const deleteSQL = 'DELETE FROM users WHERE id = ?';
  db.query(deleteSQL, [userId], (err, results) => {
    if (err) {
      console.error('Erreur suppression utilisateur:', err);
      return res.status(500).json({ error: 'Erreur lors de la suppression' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    
    res.json({ message: 'Utilisateur supprimé avec succès' });
  });
});

// === ROUTES FORMATIONS ===

// GET - Récupérer toutes les formations
app.get('/api/formations', (req, res) => {
  const sql = 'SELECT * FROM formations ORDER BY created_at DESC';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur récupération formations:', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});

// GET - Récupérer une formation par ID
app.get('/api/formations/:id', (req, res) => {
  const formationId = req.params.id;
  const sql = 'SELECT * FROM formations WHERE id = ?';
  
  db.query(sql, [formationId], (err, results) => {
    if (err) {
      console.error('Erreur récupération formation:', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ error: 'Formation non trouvée' });
    }
    
    res.json(results[0]);
  });
});

// POST - Créer une nouvelle formation
app.post('/api/formations', (req, res) => {
  const {
    name,
    description,
    curriculum,
    objectives,
    admission_requirements,
    career_outcomes,
    skills_acquired,
    duration_and_structure,
    further_studies,
    contact_info
  } = req.body;
  
  // Validation des données obligatoires
  if (!name || !description) {
    return res.status(400).json({ error: 'Le nom et la description sont obligatoires' });
  }
  
  const insertSQL = `
    INSERT INTO formations (
      name, description, curriculum, objectives, admission_requirements,
      career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  const values = [
    name, description, curriculum, objectives, admission_requirements,
    career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info
  ];
  
  db.query(insertSQL, values, (err, results) => {
    if (err) {
      console.error('Erreur création formation:', err);
      return res.status(500).json({ error: 'Erreur lors de la création de la formation' });
    }
    
    res.status(201).json({ 
      message: 'Formation créée avec succès',
      formationId: results.insertId 
    });
  });
});

// PUT - Mettre à jour une formation
app.put('/api/formations/:id', (req, res) => {
  const formationId = req.params.id;
  const {
    name,
    description,
    curriculum,
    objectives,
    admission_requirements,
    career_outcomes,
    skills_acquired,
    duration_and_structure,
    further_studies,
    contact_info
  } = req.body;
  
  const updateSQL = `
    UPDATE formations SET 
      name = ?, description = ?, curriculum = ?, objectives = ?, admission_requirements = ?,
      career_outcomes = ?, skills_acquired = ?, duration_and_structure = ?, further_studies = ?, contact_info = ?
    WHERE id = ?
  `;
  
  const values = [
    name, description, curriculum, objectives, admission_requirements,
    career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info,
    formationId
  ];
  
  db.query(updateSQL, values, (err, results) => {
    if (err) {
      console.error('Erreur mise à jour formation:', err);
      return res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Formation non trouvée' });
    }
    
    res.json({ message: 'Formation mise à jour avec succès' });
  });
});

// DELETE - Supprimer une formation
app.delete('/api/formations/:id', (req, res) => {
  const formationId = req.params.id;
  
  const deleteSQL = 'DELETE FROM formations WHERE id = ?';
  db.query(deleteSQL, [formationId], (err, results) => {
    if (err) {
      console.error('Erreur suppression formation:', err);
      return res.status(500).json({ error: 'Erreur lors de la suppression' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Formation non trouvée' });
    }
    
    res.json({ message: 'Formation supprimée avec succès' });
  });
});

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ message: 'API GEII fonctionne correctement!', timestamp: new Date() });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`API disponible sur http://localhost:${PORT}/api`);
});

// Gestion des erreurs de fermeture
process.on('SIGINT', () => {
  console.log('Fermeture du serveur...');
  db.end();
  process.exit(0);
});