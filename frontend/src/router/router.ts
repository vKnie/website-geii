import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Importation des composants/pages
import DepartementGEII from '../views/departementGEII.vue';
import Formation from '../views/Formation.vue';
import EspaceEtudiant from '../views/EspaceEtudiant.vue';
import EspaceEnseignant from '../views/EspaceEnseignant.vue';
import EspaceEntreprise from '../views/EspaceEntreprise.vue';

import dashbord from '../views/dashbord.vue';

import FormationsManager from '../views/admin/FormationsManager.vue';
import UsersManager from '../views/admin/UserManager.vue';

// Définition des routes
const routes: Array<RouteRecordRaw> = [
  { path: '/departementGEII', component: DepartementGEII },
  { path: '/formation/:name', component: Formation, props: true },
  { path: '/espace-etudiant', component: EspaceEtudiant },
  { path: '/espace-enseignant', component: EspaceEnseignant },
  { path: '/espace-entreprise', component: EspaceEntreprise },
  { path : '/dashbord', component: dashbord },
  { path : '/admin/formations', component: FormationsManager },
  { path : '/admin/users', component: UsersManager }
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;