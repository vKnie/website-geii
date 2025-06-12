import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Importation des composants/pages
import Home from '../views/home.vue';
import DepartementGEII from '../views/departementGEII.vue';
import Formation from '../views/Formation.vue';
import Login from '../views/Login.vue';

// Importation des composants administratifs
import AdminLayout from '../components/AdminLayout.vue';
import FormationsManager from '../views/admin/FormationsManager.vue';
import UsersManager from '../views/admin/UserManager.vue';

// Définition des routes
const routes: Array<RouteRecordRaw> = [
  // Routes publiques
  { path: '/', name: 'Home', component: Home },
  { path: '/departementGEII', name: 'DepartementGEII', component: DepartementGEII },
  
  // Route d'authentification
  { path: '/login', name: 'Login', component: Login },
  
  // Route espace personnel qui redirige vers admin
  { 
    path: '/espace-personnel', 
    name: 'EspacePersonnel', 
    redirect: '/admin',
    meta: { requiresAuth: true }
  },
 
  // Routes formations dynamiques (connectées au backend)
  { path: '/formations', name: 'Formations', component: Formation },
  { path: '/formations/:slug', name: 'FormationDetail', component: Formation, props: true },
 
  // Routes formations spécifiques (pour compatibilité navbar)
  { path: '/formations/lpmiaw', name: 'LPMIAW', component: Formation, props: { slug: 'lpmiaw' } },
  { path: '/formations/lpabdd', name: 'LPABDD', component: Formation, props: { slug: 'lpabdd' } },
  { path: '/formations/lpgthbt', name: 'LPGTHBT', component: Formation, props: { slug: 'lpgthbt' } },
 
  // Routes département GEII spécifiques
  { path: '/departementGEII/generalite-but-geii', name: 'GeneraliteBUTGEII', component: DepartementGEII },
  { path: '/departementGEII/lieu-de-formation', name: 'LieuFormation', component: DepartementGEII },
  { path: '/departementGEII/programme', name: 'Programme', component: DepartementGEII },
  { path: '/departementGEII/specificite-du-but-geii', name: 'SpecificiteBUTGEII', component: DepartementGEII },
  { path: '/departementGEII/formation-en-alternance', name: 'FormationAlternance', component: DepartementGEII },
  { path: '/departementGEII/apres-le-but-geii', name: 'ApresBUTGEII', component: DepartementGEII },
 
  // Routes administratives
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'formations', name: 'AdminFormations', component: FormationsManager },
      { path: 'users', name: 'AdminUsers', component: UsersManager },
    ],
  },
  
  // Route 404 - doit être en dernier
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/' }
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Retourne en haut de la page lors du changement de route
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Navigation guards avec authentification
router.beforeEach((to, from, next) => {
  // Vérifier si l'utilisateur est connecté
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const isAuthenticated = !!currentUser;
  
  // Si la route nécessite une authentification
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Rediriger vers la page de connexion avec l'URL de retour
    next({ name: 'Login', query: { redirect: to.fullPath } });
    return;
  }
  
  // Si l'utilisateur est connecté et essaie d'accéder à la page de connexion
  if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Admin' });
    return;
  }
  
  next();
});

export default router;