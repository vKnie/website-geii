import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Importation des composants/pages
import Accueil from '../views/accueil.vue';
import Presentation from '../views/presentation.vue';
import Formations from '../views/formations.vue';
import EspaceEtudiant from '../views/EspaceEtudiant.vue';
import EspaceEnseignant from '../views/EspaceEnseignant.vue';
import EspaceEntreprise from '../views/EspaceEntreprise.vue';

// Définition des routes
const routes: Array<RouteRecordRaw> = [
  { path: '/', components: Accueil },
  { path: '/présentation', components: Presentation },
  { path: '/formations', components: Formations },
  { path: '/espace-etudiant', components: EspaceEtudiant },
  { path: '/espace-enseignant', components: EspaceEnseignant },
  { path: '/espace-entreprise', components: EspaceEntreprise }
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;