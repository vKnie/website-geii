# 📌 Configuration des dépendances Express.js

Ce projet utilise plusieurs **middlewares** pour améliorer la sécurité, la gestion des requêtes et les performances du serveur **Express.js**.

## 📦 Dépendances principales

### 1️⃣ dotenv
**📌 Gestion des variables d'environnement**
- Permet de stocker les variables sensibles (ex: clés API, configurations) dans un fichier `.env`.
- Exemple d'utilisation :
  ```js
  require('dotenv').config();
  const PORT = process.env.PORT || 5000;
  ```

### 2️⃣ cors
**📌 Autorise les requêtes cross-origin (CORS)**
- Utile pour permettre au frontend (ex: Vue.js) d'accéder au backend.
- Exemple d'utilisation :
  ```js
  const cors = require('cors');
  app.use(cors());
  ```

### 3️⃣ helmet
**📌 Sécurise les en-têtes HTTP**
- Protège contre certaines attaques web (XSS, Clickjacking, etc.).
- Exemple d'utilisation :
  ```js
  const helmet = require('helmet');
  app.use(helmet());
  ```

### 4️⃣ morgan
**📌 Logger des requêtes HTTP**
- Affiche les logs des requêtes entrantes pour faciliter le debugging.
- Exemple d'utilisation :
  ```js
  const morgan = require('morgan');
  app.use(morgan('dev'));
  ```

### 5️⃣ compression
**📌 Compresse les réponses HTTP**
- Réduit la taille des réponses pour améliorer les performances.
- Exemple d'utilisation :
  ```js
  const compression = require('compression');
  app.use(compression());
  ```

## 🚀 Installation
```sh
npm install dotenv cors helmet morgan compression
```

## 🎯 Conclusion
Ces dépendances sont essentielles pour assurer un **serveur Express.js sécurisé, performant et bien structuré**. 🚀

