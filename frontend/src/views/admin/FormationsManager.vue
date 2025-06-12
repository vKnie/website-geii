<script setup>
import { ref } from 'vue';
import { useFormationsManager } from "../../api/formationsManager.js";

// Importation des hooks nécessaires
const { formations, newFormation, editingFormation, isLoading, addFormation, updateFormation, deleteFormation } = useFormationsManager();

// État réactif pour afficher ou masquer le formulaire d'ajout
const showAddForm = ref(false);

// Fonction pour afficher ou masquer le formulaire
const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
};

// Réinitialiser le formulaire après ajout ou annulation
const resetNewFormation = () => {
  newFormation.value = {
    name: '',
    description: '',
    curriculum: '',
    objectives: '',
    admission_requirements: '',
    career_outcomes: '',
    skills_acquired: '',
    duration_and_structure: '',
    further_studies: '',
    contact_info: ''
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
            Gestion des formations
          </h1>
          <p class="text-gray-600">
            Administrez les formations proposées par le département GEII
          </p>
        </div>
        <button
          @click="toggleAddForm"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          {{ showAddForm ? 'Annuler l\'ajout' : 'Ajouter une formation' }}
        </button>
      </div>
    </div>

    <!-- Formulaire d'ajout -->
    <div v-if="showAddForm" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Ajouter une formation</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Nom de la formation -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Nom de la formation *</label>
          <input 
            v-model="newFormation.name" 
            type="text"
            placeholder="Ex: Licence Professionnelle MIAW" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <!-- Description -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Description *</label>
          <textarea 
            v-model="newFormation.description" 
            placeholder="Description générale de la formation..."
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required
          ></textarea>
        </div>
        
        <!-- Curriculum -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Curriculum</label>
          <textarea 
            v-model="newFormation.curriculum" 
            placeholder="Détails du programme d'études..."
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Objectifs -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Objectifs</label>
          <textarea 
            v-model="newFormation.objectives" 
            placeholder="Objectifs pédagogiques..."
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Conditions d'admission -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Conditions d'admission</label>
          <textarea 
            v-model="newFormation.admission_requirements" 
            placeholder="Prérequis et conditions..."
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Débouchés professionnels -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Débouchés professionnels</label>
          <textarea 
            v-model="newFormation.career_outcomes" 
            placeholder="Métiers et opportunités..."
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Compétences acquises -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Compétences acquises</label>
          <textarea 
            v-model="newFormation.skills_acquired" 
            placeholder="Compétences développées..."
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Durée et structure -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Durée et structure</label>
          <textarea 
            v-model="newFormation.duration_and_structure" 
            placeholder="Organisation temporelle..."
            rows="2"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Poursuites d'études -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Poursuites d'études</label>
          <textarea 
            v-model="newFormation.further_studies" 
            placeholder="Formations complémentaires..."
            rows="2"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Informations de contact -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Informations de contact</label>
          <textarea 
            v-model="newFormation.contact_info" 
            placeholder="Contacts, coordonnées..."
            rows="2"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
      </div>
      
      <div class="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button
          @click="toggleAddForm"
          class="px-6 py-2 text-gray-700 bg-gray-100 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
          Annuler
        </button>
        <button
          @click="addFormation(); resetNewFormation(); toggleAddForm()"
          class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Ajouter la formation
        </button>
      </div>
    </div>

    <!-- Liste des formations -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      
      <!-- En-tête du tableau -->
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium text-gray-900">
            Liste des formations
          </h3>
          <div class="flex items-center space-x-3">
            <span class="text-sm text-gray-500">
              {{ formations.length }} formation(s)
            </span>
          </div>
        </div>
      </div>

      <!-- Contenu -->
      <div v-if="isLoading" class="flex items-center justify-center py-12">
        <div class="flex items-center space-x-2 text-gray-500">
          <svg class="animate-spin h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span>Chargement des formations...</span>
        </div>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Formation</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="formation in formations" :key="formation.id" class="hover:bg-gray-50 transition-colors duration-200">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                #{{ formation.id }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">
                      {{ formation.name }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600 max-w-xs">
                <div class="truncate">
                  {{ formation.description }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="flex justify-center space-x-2">
                  <button 
                    @click="editingFormation = { ...formation }" 
                    class="inline-flex items-center px-3 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-lg hover:bg-green-200 transition-colors duration-200"
                    title="Modifier"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </button>
                  <button 
                    @click="deleteFormation(formation.id)" 
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
    <div v-if="editingFormation" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Modifier la formation</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Nom de la formation -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Nom de la formation</label>
          <input 
            v-model="editingFormation.name" 
            type="text"
            placeholder="Nom de la formation" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required 
          />
        </div>
        
        <!-- Description -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            v-model="editingFormation.description" 
            placeholder="Description"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
            required
          ></textarea>
        </div>
        
        <!-- Curriculum -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Curriculum</label>
          <textarea 
            v-model="editingFormation.curriculum" 
            placeholder="Curriculum"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Objectifs -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Objectifs</label>
          <textarea 
            v-model="editingFormation.objectives" 
            placeholder="Objectifs"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Conditions d'admission -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Conditions d'admission</label>
          <textarea 
            v-model="editingFormation.admission_requirements" 
            placeholder="Conditions d'admission"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Débouchés professionnels -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Débouchés professionnels</label>
          <textarea 
            v-model="editingFormation.career_outcomes" 
            placeholder="Débouchés professionnels"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Compétences acquises -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Compétences acquises</label>
          <textarea 
            v-model="editingFormation.skills_acquired" 
            placeholder="Compétences acquises"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Durée et structure -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Durée et structure</label>
          <textarea 
            v-model="editingFormation.duration_and_structure" 
            placeholder="Durée et structure"
            rows="2"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Poursuites d'études -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">Poursuites d'études</label>
          <textarea 
            v-model="editingFormation.further_studies" 
            placeholder="Poursuites d'études"
            rows="2"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
        
        <!-- Informations de contact -->
        <div class="md:col-span-2 space-y-2">
          <label class="block text-sm font-medium text-gray-700">Informations de contact</label>
          <textarea 
            v-model="editingFormation.contact_info" 
            placeholder="Informations de contact"
            rows="2"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          ></textarea>
        </div>
      </div>
      
      <div class="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button 
          @click="editingFormation = null" 
          class="px-6 py-2 text-gray-700 bg-gray-100 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
          Annuler
        </button>
        <button 
          @click="updateFormation" 
          class="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
          Mettre à jour
        </button>
      </div>
    </div>
  </div>
</template>