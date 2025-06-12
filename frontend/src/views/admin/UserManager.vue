<script setup>
import { ref } from 'vue';
import { useUserManager } from "../../api/userManager.js";

const { users, newUser, editingUser, isLoading, addUser, updateUser, deleteUser } = useUserManager();

// État réactif pour afficher ou masquer le formulaire d'ajout
const showAddForm = ref(false);

// Fonction pour afficher ou masquer le formulaire
const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
};

// Réinitialiser le formulaire après ajout ou annulation
const resetNewUser = () => {
  newUser.value = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'student'
  };
};
</script>

<template>
  <div class="space-y-6">
    
    <!-- En-tête de la page -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 mb-2">
            Gestion des utilisateurs
          </h1>
          <p class="text-gray-600">
            Gérez les comptes étudiants, enseignants et personnel du département
          </p>
        </div>
        <button
          @click="toggleAddForm"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          {{ showAddForm ? 'Annuler l\'ajout' : 'Ajouter un utilisateur' }}
        </button>
      </div>
    </div>

    <!-- Formulaire d'ajout -->
    <div v-if="showAddForm" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Ajouter un utilisateur</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Prénom</label>
          <input 
            v-model="newUser.first_name" 
            type="text"
            placeholder="Entrez le prénom" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Nom</label>
          <input 
            v-model="newUser.last_name" 
            type="text"
            placeholder="Entrez le nom" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            v-model="newUser.email" 
            type="email" 
            placeholder="utilisateur@example.com" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input 
            v-model="newUser.password" 
            type="password" 
            placeholder="Mot de passe sécurisé" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Rôle</label>
          <select 
            v-model="newUser.role" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="student">Étudiant</option>
            <option value="teacher">Enseignant</option>
            <option value="staff">Personnel</option>
            <option value="company">Entreprise</option>
            <option value="public">Public</option>
          </select>
        </div>
      </div>
      
      <div class="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button
          @click="toggleAddForm"
          class="px-6 py-2 text-gray-700 bg-gray-100 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
          Annuler
        </button>
        <button
          @click="addUser(); resetNewUser(); toggleAddForm()"
          class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Ajouter l'utilisateur
        </button>
      </div>
    </div>

    <!-- Liste des utilisateurs -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      
      <!-- En-tête du tableau -->
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium text-gray-900">
            Liste des utilisateurs
          </h3>
          <div class="flex items-center space-x-3">
            <span class="text-sm text-gray-500">
              {{ users.length }} utilisateur(s)
            </span>
            <div class="relative">
              <input 
                type="text" 
                placeholder="Rechercher..."
                class="pl-8 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
              <svg class="absolute left-2 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenu du tableau -->
      <div v-if="isLoading" class="flex items-center justify-center py-12">
        <div class="flex items-center space-x-2 text-gray-500">
          <svg class="animate-spin h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span>Chargement des utilisateurs...</span>
        </div>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition-colors duration-200">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                #{{ user.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-sm font-medium text-blue-600">
                      {{ user.first_name?.charAt(0) }}{{ user.last_name?.charAt(0) }}
                    </span>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">
                      {{ user.first_name }} {{ user.last_name }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {{ user.email }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                      :class="{
                        'bg-blue-100 text-blue-800': user.role === 'student',
                        'bg-green-100 text-green-800': user.role === 'teacher',
                        'bg-purple-100 text-purple-800': user.role === 'staff',
                        'bg-orange-100 text-orange-800': user.role === 'company',
                        'bg-gray-100 text-gray-800': user.role === 'public'
                      }">
                  {{
                    user.role === 'student' ? 'Étudiant' :
                    user.role === 'teacher' ? 'Enseignant' :
                    user.role === 'staff' ? 'Personnel' :
                    user.role === 'company' ? 'Entreprise' :
                    'Public'
                  }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="flex justify-center space-x-2">
                  <button 
                    @click="editingUser = { ...user }" 
                    class="inline-flex items-center px-3 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-lg hover:bg-green-200 transition-colors duration-200"
                    title="Modifier"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </button>
                  <button 
                    @click="deleteUser(user.id)" 
                    class="inline-flex items-center px-3 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-lg hover:bg-red-200 transition-colors duration-200"
                    title="Supprimer"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Formulaire de modification -->
    <div v-if="editingUser" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Modifier l'utilisateur</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Prénom</label>
          <input 
            v-model="editingUser.first_name" 
            type="text"
            placeholder="Prénom" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Nom</label>
          <input 
            v-model="editingUser.last_name" 
            type="text"
            placeholder="Nom" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            v-model="editingUser.email" 
            type="email" 
            placeholder="Email" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input 
            v-model="editingUser.password" 
            type="password" 
            placeholder="Nouveau mot de passe (optionnel)" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
          />
        </div>
        
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Rôle</label>
          <select 
            v-model="editingUser.role" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="student">Étudiant</option>
            <option value="teacher">Enseignant</option>
            <option value="staff">Personnel</option>
            <option value="company">Entreprise</option>
            <option value="public">Public</option>
          </select>
        </div>
      </div>
      
      <div class="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button 
          @click="editingUser = null" 
          class="px-6 py-2 text-gray-700 bg-gray-100 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
          Annuler
        </button>
        <button 
          @click="updateUser" 
          class="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
          Mettre à jour
        </button>
      </div>
    </div>
  </div>
</template>