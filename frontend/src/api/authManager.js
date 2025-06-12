// api/authManager.js
import { ref, computed } from 'vue';

const API_BASE_URL = 'http://localhost:3000/api';

// État global d'authentification
const currentUser = ref(null);
const isAuthenticated = computed(() => !!currentUser.value);

export function useAuthManager() {
  const isLoading = ref(false);
  const error = ref(null);

  // Charger l'utilisateur depuis le localStorage au démarrage
  const initAuth = () => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        currentUser.value = JSON.parse(savedUser);
      } catch (e) {
        console.error('Erreur lors du chargement des données utilisateur:', e);
        localStorage.removeItem('currentUser');
      }
    }
  };

  // Fonction de connexion
  const login = async (credentials) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur de connexion');
      }

      // Sauvegarder l'utilisateur
      currentUser.value = data.user;
      localStorage.setItem('currentUser', JSON.stringify(data.user));

      return {
        success: true,
        user: data.user,
        message: data.message
      };

    } catch (err) {
      error.value = err.message;
      return {
        success: false,
        error: err.message
      };
    } finally {
      isLoading.value = false;
    }
  };

  // Fonction de déconnexion
  const logout = async () => {
    try {
      // Optionnel : appeler l'API de déconnexion
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
      });
    } catch (err) {
      console.warn('Erreur lors de la déconnexion côté serveur:', err);
    }

    // Nettoyer les données locales
    currentUser.value = null;
    localStorage.removeItem('currentUser');
    error.value = null;
  };

  // Vérifier si l'utilisateur a un rôle spécifique
  const hasRole = (role) => {
    return currentUser.value?.role === role;
  };

  // Vérifier si l'utilisateur a l'un des rôles spécifiés
  const hasAnyRole = (roles) => {
    return roles.includes(currentUser.value?.role);
  };

  // Initialiser l'authentification
  if (typeof window !== 'undefined') {
    initAuth();
  }

  return {
    // État
    currentUser: computed(() => currentUser.value),
    isAuthenticated,
    isLoading,
    error,
    
    // Actions
    login,
    logout,
    hasRole,
    hasAnyRole,
    initAuth
  };
}