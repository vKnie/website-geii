<template>
  <nav class="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
    <div class="container mx-auto px-4 lg:px-6">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center group">
            <img 
              src="../assets/logo2.png" 
              alt="Logo IUT" 
              class="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
            >
          </router-link>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden lg:flex lg:items-center lg:space-x-1">
          
          <!-- Département GEII -->
          <div class="relative group">
            <router-link 
              to="/departementGEII" 
              class="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
            >
              Département GEII
              <svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </router-link>
            
            <!-- Dropdown Desktop -->
            <div class="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <router-link 
                  to="/departementGEII/generalite-but-geii" 
                  class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                >
                  Généralité BUT GEII
                </router-link>
                <router-link 
                  to="/departementGEII/lieu-de-formation" 
                  class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                >
                  Lieu de formation
                </router-link>
                <router-link 
                  to="/departementGEII/programme" 
                  class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                >
                  Programme
                </router-link>
                <router-link 
                  to="/departementGEII/specificite-du-but-geii" 
                  class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                >
                  Spécificité du BUT GEII
                </router-link>
                <router-link 
                  to="/departementGEII/formation-en-alternance" 
                  class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                >
                  Formation en Alternance
                </router-link>
                <router-link 
                  to="/departementGEII/apres-le-but-geii" 
                  class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                >
                  Après le BUT GEII
                </router-link>
              </div>
            </div>
          </div>

          <!-- Formations -->
          <div class="relative group">
            <router-link 
              to="/formations" 
              class="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
            >
              Formations
              <svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </router-link>
            
            <!-- Dropdown Desktop - Formations dynamiques -->
            <div class="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <!-- Formations chargées dynamiquement -->
                <div v-if="isLoading" class="px-4 py-3 text-sm text-gray-500">
                  Chargement...
                </div>
                <div v-else-if="formations.length === 0" class="px-4 py-3 text-sm text-gray-500">
                  Aucune formation disponible
                </div>
                <template v-else>
                  <router-link 
                    v-for="formation in formations" 
                    :key="formation.id"
                    :to="`/formations/${formation.id}`" 
                    class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                  >
                    {{ formation.name }}
                  </router-link>
                </template>
              </div>
            </div>
          </div>

          <!-- Espace Personnel -->
          <div class="relative">
            <!-- Si l'utilisateur est connecté -->
            <div v-if="isAuthenticated" class="relative group">
              <button
                class="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {{ currentUser.first_name }} {{ currentUser.last_name }}
                <svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown utilisateur connecté -->
              <div class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div class="py-2">
                  <div class="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                    {{ currentUser.email }}
                  </div>
                  <router-link 
                    to="/admin" 
                    class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                  >
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Administration
                  </router-link>
                  <button 
                    @click="handleLogout"
                    class="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                  >
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Si l'utilisateur n'est pas connecté -->
            <router-link 
              v-else
              to="/login"
              class="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Espace personnel
            </router-link>
          </div>
        </div>

        <!-- Menu Hamburger Mobile -->
        <button 
          @click="toggleMenu" 
          class="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              :class="isMenuOpen ? 'hidden' : 'block'"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
            <path 
              :class="isMenuOpen ? 'block' : 'hidden'"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div 
      :class="isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
      class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200"
    >
      <div class="px-4 py-4 space-y-2">
        
        <!-- Espace Personnel Mobile -->
        <div v-if="isAuthenticated" class="space-y-2 border-b border-gray-200 pb-4 mb-4">
          <div class="px-3 py-2 text-sm text-gray-600">
            Connecté en tant que <strong>{{ currentUser.first_name }} {{ currentUser.last_name }}</strong>
          </div>
          <router-link 
            to="/admin" 
            @click="toggleMenu"
            class="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Administration
          </router-link>
          <button 
            @click="handleLogout"
            class="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Se déconnecter
          </button>
        </div>

        <router-link 
          v-else
          to="/login"
          @click="toggleMenu"
          class="w-full flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Espace personnel
        </router-link>

        <!-- Département GEII Mobile -->
        <div class="space-y-1">
          <button 
            @click="toggleSubMenu('geii')"
            class="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
          >
            Département GEII
            <svg 
              :class="isSubMenuOpen === 'geii' ? 'rotate-180' : ''"
              class="h-4 w-4 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            :class="isSubMenuOpen === 'geii' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
            class="ml-4 space-y-1 overflow-hidden transition-all duration-200"
          >
            <router-link 
              to="/departementGEII/generalite-but-geii" 
              @click="toggleMenu"
              class="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
            >
              Généralité BUT GEII
            </router-link>
            <router-link 
              to="/departementGEII/lieu-de-formation" 
              @click="toggleMenu"
              class="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
            >
              Lieu de formation
            </router-link>
            <router-link 
              to="/departementGEII/programme" 
              @click="toggleMenu"
              class="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
            >
              Programme
            </router-link>
            <router-link 
              to="/departementGEII/specificite-du-but-geii" 
              @click="toggleMenu"
              class="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
            >
              Spécificité du BUT GEII
            </router-link>
            <router-link 
              to="/departementGEII/formation-en-alternance" 
              @click="toggleMenu"
              class="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
            >
              Formation en Alternance
            </router-link>
            <router-link 
              to="/departementGEII/apres-le-but-geii" 
              @click="toggleMenu"
              class="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
            >
              Après le BUT GEII
            </router-link>
          </div>
        </div>

        <!-- Formations Mobile -->
        <div class="space-y-1">
          <button 
            @click="toggleSubMenu('formations')"
            class="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
          >
            Formations
            <svg 
              :class="isSubMenuOpen === 'formations' ? 'rotate-180' : ''"
              class="h-4 w-4 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            :class="isSubMenuOpen === 'formations' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
            class="ml-4 space-y-1 overflow-hidden transition-all duration-200"
          >
            <!-- Formations chargées dynamiquement en mobile -->
            <div v-if="isLoading" class="px-3 py-2 text-sm text-gray-500">
              Chargement...
            </div>
            <div v-else-if="formations.length === 0" class="px-3 py-2 text-sm text-gray-500">
              Aucune formation disponible
            </div>
            <template v-else>
              <router-link 
                v-for="formation in formations" 
                :key="formation.id"
                :to="`/formations/${formation.id}`" 
                @click="toggleMenu"
                class="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
              >
                {{ formation.name }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useFormationsManager } from '../api/formationsManager.js';
import { useAuthManager } from '../api/authManager.js';

export default {
  name: 'Navbar',
  setup() {
    // Utiliser le composable pour récupérer les formations
    const { formations, isLoading, error } = useFormationsManager();
    
    // Utiliser le composable pour l'authentification
    const { 
      currentUser, 
      isAuthenticated, 
      logout
    } = useAuthManager();

    return {
      formations,
      isLoading,
      error,
      currentUser,
      isAuthenticated,
      logout
    };
  },
  data() {
    return {
      isMenuOpen: false,
      isSubMenuOpen: null
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) {
        this.isSubMenuOpen = null;
      }
    },
    toggleSubMenu(menu) {
      this.isSubMenuOpen = this.isSubMenuOpen === menu ? null : menu;
    },
    async handleLogout() {
      if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        await this.logout();
        
        // Fermer le menu mobile si ouvert
        this.isMenuOpen = false;
        
        // Rediriger vers l'accueil
        this.$router.push('/');
      }
    }
  },
  mounted() {
    // Fermer le menu mobile si on clique à l'extérieur
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isMenuOpen = false;
        this.isSubMenuOpen = null;
      }
    });
  },
  beforeUnmount() {
    // Nettoyer les event listeners
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>