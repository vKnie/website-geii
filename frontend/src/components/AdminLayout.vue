<!-- AdminLayout.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="fixed left-0 top-0 z-40 w-64 h-screen bg-white border-r border-gray-200 shadow-sm">
      <!-- En-tête sidebar -->
      <div class="flex items-center justify-center h-16 px-6 border-b border-gray-200">
        <div class="text-center">
          <h2 class="text-lg font-bold text-gray-900">Admin GEII</h2>
          <p class="text-xs text-gray-500">Tableau de bord</p>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="mt-6 px-3">
        <div class="space-y-1">

          <!-- Tableau de bord -->
          <router-link 
            to="/admin" 
            exact
            class="group flex items-center px-3 py-3 text-sm font-medium rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600"
          >
            <svg class="flex-shrink-0 w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Tableau de bord
          </router-link>

          <!-- Utilisateurs -->
          <router-link 
            to="/admin/users" 
            class="group flex items-center px-3 py-3 text-sm font-medium rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600"
          >
            <svg class="flex-shrink-0 w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
            </svg>
            Utilisateurs
          </router-link>

          <!-- Formations -->
          <router-link 
            to="/admin/formations" 
            class="group flex items-center px-3 py-3 text-sm font-medium rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            active-class="bg-blue-50 text-blue-600 border-r-2 border-blue-600"
          >
            <svg class="flex-shrink-0 w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Formations
          </router-link>
        </div>

        <!-- Section secondaire -->
        <div class="mt-8 pt-6 border-t border-gray-200">
          <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Système
          </h3>
          <div class="mt-3 space-y-1">
            
            <!-- Paramètres -->
            <button class="group w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              <svg class="flex-shrink-0 w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Paramètres
            </button>

            <!-- Déconnexion -->
            <button 
              @click="handleLogout"
              class="group w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
            >
              <svg class="flex-shrink-0 w-5 h-5 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      <!-- Profil admin en bas -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ currentUser?.first_name }} {{ currentUser?.last_name }}
            </p>
            <p class="text-xs text-gray-500 truncate">
              {{ currentUser?.email }}
            </p>
            <div class="flex items-center mt-1">
              <div class="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
              <span class="text-xs text-green-600 font-medium">En ligne</span>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="ml-64">
      <!-- Barre de navigation supérieure -->
      <header class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="text-xl font-semibold text-gray-900">
              {{ pageTitle }}
            </h1>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getRoleColor(currentUser?.role)">
              {{ getRoleLabel(currentUser?.role) }}
            </span>
          </div>
          
          <!-- Notifications et actions -->
          <div class="flex items-center space-x-4">
            
            <!-- Statut de connexion -->
            <div class="flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-full">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-sm text-green-700 font-medium">Connecté</span>
            </div>

            <!-- Notifications -->
            <button class="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors duration-200">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-3.5-3.5a6 6 0 11-1.414-1.414L17 12h-5m3 5H9a9 9 0 110-18h6a9 9 0 010 18z"></path>
              </svg>
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <!-- Recherche rapide -->
            <div class="relative">
              <input 
                type="text" 
                placeholder="Recherche rapide..."
                class="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
              <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <!-- Retour au site -->
            <router-link 
              to="/"
              class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Retour au site
            </router-link>
          </div>
        </div>
      </header>

      <!-- Contenu principal -->
      <main class="p-6">
        <!-- Page d'accueil admin par défaut -->
        <div v-if="$route.path === '/admin'" class="space-y-6">
          
          <!-- Message de bienvenue -->
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold mb-2">
                  Bienvenue {{ currentUser?.first_name }} ! 👋
                </h2>
                <p class="text-blue-100">
                  Vous êtes connecté en tant que {{ getRoleLabel(currentUser?.role) }}
                </p>
                <p class="text-sm text-blue-200 mt-1">
                  Dernière connexion : {{ formatDate(new Date()) }}
                </p>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold">{{ formatTime(new Date()) }}</div>
                <div class="text-blue-200 text-sm">{{ formatDate(new Date()) }}</div>
              </div>
            </div>
          </div>

          <!-- Statistiques rapides -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center">
                <div class="p-3 bg-blue-100 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Utilisateurs</p>
                  <p class="text-2xl font-bold text-gray-900">247</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center">
                <div class="p-3 bg-green-100 rounded-lg">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Formations</p>
                  <p class="text-2xl font-bold text-gray-900">4</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center">
                <div class="p-3 bg-yellow-100 rounded-lg">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Sessions actives</p>
                  <p class="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center">
                <div class="p-3 bg-purple-100 rounded-lg">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Système</p>
                  <p class="text-2xl font-bold text-green-600">Opérationnel</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions rapides -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <router-link 
                to="/admin/users"
                class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg class="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
                <div>
                  <h4 class="font-medium text-gray-900">Gérer les utilisateurs</h4>
                  <p class="text-sm text-gray-500">Ajouter, modifier ou supprimer des utilisateurs</p>
                </div>
              </router-link>

              <router-link 
                to="/admin/formations"
                class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg class="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <div>
                  <h4 class="font-medium text-gray-900">Gérer les formations</h4>
                  <p class="text-sm text-gray-500">Ajouter, modifier ou supprimer des formations</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Router view pour les sous-pages -->
        <router-view v-else />
      </main>
    </div>
  </div>
</template>

<script>
import { useAuthManager } from '../api/authManager.js';

export default {
  name: "AdminLayout",
  setup() {
    // Utiliser le composable pour l'authentification
    const { currentUser, logout } = useAuthManager();

    return {
      currentUser,
      logout
    };
  },
  computed: {
    pageTitle() {
      const routeNames = {
        '/admin': 'Tableau de bord',
        '/admin/users': 'Gestion des utilisateurs',
        '/admin/formations': 'Gestion des formations'
      };
      return routeNames[this.$route.path] || 'Administration';
    }
  },
  methods: {
    getRoleLabel(role) {
      const roleLabels = {
        'student': 'Étudiant',
        'teacher': 'Enseignant',
        'staff': 'Personnel administratif',
        'company': 'Entreprise',
        'public': 'Public'
      };
      return roleLabels[role] || 'Utilisateur';
    },
    getRoleColor(role) {
      const roleColors = {
        'student': 'bg-blue-100 text-blue-800',
        'teacher': 'bg-green-100 text-green-800',
        'staff': 'bg-purple-100 text-purple-800',
        'company': 'bg-orange-100 text-orange-800',
        'public': 'bg-gray-100 text-gray-800'
      };
      return roleColors[role] || 'bg-gray-100 text-gray-800';
    },
    formatDate(date) {
      return new Intl.DateTimeFormat('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);
    },
    formatTime(date) {
      return new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    },
    async handleLogout() {
      if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        await this.logout();
        this.$router.push('/');
      }
    }
  }
};
</script>