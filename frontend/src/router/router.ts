import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Importation des composants/pages
import Home from '../views/home.vue';
import DepartementGEII from '../views/departementGEII.vue';
import Formation from '../views/Formation.vue';
import EspaceEtudiant from '../views/EspaceEtudiant.vue';
import EspaceEnseignant from '../views/EspaceEnseignant.vue';
import EspaceEntreprise from '../views/EspaceEntreprise.vue';

import DashboardEtudiant from '../views/DashboardEtudiant.vue';
import DashboardEnseignant from '../views/DashboardEnseignant.vue';
import DashboardEntreprise from '../views/DashboardEntreprise.vue';

// Importation des composants administratifs
import AdminLayout from '../components/AdminLayout.vue'; // Assurez-vous que le chemin est correct
import AdminDashboard from '../views/admin/AdminDashboard.vue';
import FormationsManager from '../views/admin/FormationsManager.vue';
import UsersManager from '../views/admin/UserManager.vue';

// Définition des routes
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/departementGEII', component: DepartementGEII },
  { path: '/formation/:name', component: Formation, props: true },
  { path: '/espace-etudiant', component: EspaceEtudiant },
  { path: '/espace-enseignant', component: EspaceEnseignant },
  { path: '/espace-entreprise', component: EspaceEntreprise },
  { path : '/dashboard-etudiant', component: DashboardEtudiant},
  { path : '/dashboard-enseignant', component: DashboardEnseignant },
  { path : '/dashboard-entreprise', component: DashboardEntreprise },
  
  { path: '/dashbord', component: dashbord },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', component: AdminDashboard }, // Route par défaut pour /admin
      { path: 'formations', component: FormationsManager },
      { path: 'users', component: UsersManager },
      // Ajoutez d'autres routes administratives ici
    ],
  },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
