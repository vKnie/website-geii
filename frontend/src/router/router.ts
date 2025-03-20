import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Importation des composants/pages
import DepartementGEII from '../views/departementGEII.vue';
import Formations from '../views/formations.vue';
import EspaceEtudiant from '../views/EspaceEtudiant.vue';
import EspaceEnseignant from '../views/EspaceEnseignant.vue';
import EspaceEntreprise from '../views/EspaceEntreprise.vue';

import UserManager from '../views/admin/UserManager.vue';

// Définition des routes
const routes: Array<RouteRecordRaw> = [
  { path: '/departementGEII', component: DepartementGEII },
  { path: '/formations', component: Formations },
  { path: '/espace-etudiant', component: EspaceEtudiant },
  { path: '/espace-enseignant', component: EspaceEnseignant },
  { path: '/espace-entreprise', component: EspaceEntreprise },
  { path : '/admin/UserManager', component: UserManager }
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;