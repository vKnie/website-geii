<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      
      <!-- En-tête -->
      <div class="text-center">
        <router-link to="/" class="inline-block">
          <img 
            src="../assets/logo2.png" 
            alt="Logo IUT" 
            class="h-16 w-auto mx-auto mb-4"
          >
        </router-link>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">
          Connexion
        </h2>
        <p class="text-gray-600">
          Accédez à votre espace d'administration
        </p>
      </div>

      <!-- Formulaire de connexion -->
      <div class="bg-white py-8 px-6 shadow-xl rounded-lg">
        <form @submit.prevent="handleLogin" class="space-y-6">
          
          <!-- Message de redirection -->
          <div v-if="redirectMessage" class="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p class="text-sm text-blue-600">{{ redirectMessage }}</p>
          </div>
          
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Adresse email
            </label>
            <input 
              id="email"
              v-model="loginForm.email"
              type="email" 
              required
              autocomplete="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="votre.email@example.com"
            >
          </div>
          
          <!-- Mot de passe -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <div class="relative">
              <input 
                id="password"
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                class="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Votre mot de passe"
              >
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg v-if="!showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Options -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                id="remember"
                v-model="loginForm.remember"
                type="checkbox" 
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label for="remember" class="ml-2 block text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div>
            
            <a href="#" class="text-sm text-blue-600 hover:text-blue-800 transition-colors">
              Mot de passe oublié ?
            </a>
          </div>
          
          <!-- Bouton de connexion -->
          <button 
            type="submit"
            :disabled="authLoading"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <span v-if="authLoading" class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connexion en cours...
            </span>
            <span v-else>Se connecter</span>
          </button>
        </form>
        
        <!-- Message d'erreur -->
        <div v-if="authError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <div class="flex">
            <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">
                Erreur de connexion
              </h3>
              <p class="mt-1 text-sm text-red-600">{{ authError }}</p>
            </div>
          </div>
        </div>
        
        <!-- Message de succès -->
        <div v-if="successMessage" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <div class="flex">
            <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="ml-3">
              <p class="text-sm text-green-600">{{ successMessage }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Comptes de test -->
      <div class="bg-white py-6 px-6 shadow rounded-lg border-l-4 border-blue-500">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          🧪 Comptes de test
        </h3>
        <div class="space-y-2 text-sm">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="font-medium text-gray-700">Étudiant :</p>
              <p class="text-gray-600">jean.dupont@iut.fr</p>
              <p class="text-gray-600">password123</p>
            </div>
            <div>
              <p class="font-medium text-gray-700">Professeur :</p>
              <p class="text-gray-600">marie.martin@iut.fr</p>
              <p class="text-gray-600">password123</p>
            </div>
          </div>
          <div class="pt-2">
            <p class="font-medium text-gray-700">Administrateur :</p>
            <p class="text-gray-600">admin@iut.fr / admin123</p>
          </div>
        </div>
      </div>

      <!-- Retour à l'accueil -->
      <div class="text-center">
        <router-link 
          to="/" 
          class="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← Retour à l'accueil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthManager } from '../api/authManager.js';

export default {
  name: 'Login',
  setup() {
    // Utiliser le composable pour l'authentification
    const { 
      login, 
      isLoading: authLoading,
      error: authError
    } = useAuthManager();

    return {
      login,
      authLoading,
      authError
    };
  },
  data() {
    return {
      showPassword: false,
      successMessage: '',
      redirectMessage: '',
      loginForm: {
        email: '',
        password: '',
        remember: false
      }
    };
  },
  mounted() {
    // Vérifier s'il y a un message de redirection
    if (this.$route.query.redirect) {
      this.redirectMessage = 'Vous devez vous connecter pour accéder à cette page.';
    }
  },
  methods: {
    async handleLogin() {
      // Réinitialiser les messages
      this.successMessage = '';
      
      const result = await this.login({
        email: this.loginForm.email,
        password: this.loginForm.password
      });
      
      if (result.success) {
        // Connexion réussie
        this.successMessage = 'Connexion réussie ! Redirection en cours...';
        
        // Réinitialiser le formulaire
        this.loginForm = {
          email: '',
          password: '',
          remember: false
        };
        
        // Rediriger après un court délai
        setTimeout(() => {
          const redirectPath = this.$route.query.redirect || '/admin';
          this.$router.push(redirectPath);
        }, 1500);
      }
      // Les erreurs sont gérées automatiquement par le composable
    }
  }
}
</script>