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
  <main class="flex-1 p-6">
    <header class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Gestion des formations</h1>
      <button
        @click="toggleAddForm"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {{ showAddForm ? 'Annuler l\'ajout' : 'Ajouter une formation' }}
      </button>
    </header>

    <!-- Liste des formations -->
    <div v-if="isLoading" class="text-center text-gray-500 mb-6">Chargement...</div>
    <div v-else class="bg-white shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="p-4 text-left">ID</th>
            <th class="p-4 text-left">Nom</th>
            <th class="p-4 text-left">Description</th>
            <th class="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="formation in formations" :key="formation.id" class="hover:bg-gray-100 transition duration-200">
            <td class="p-4">{{ formation.id }}</td>
            <td class="p-4">{{ formation.name }}</td>
            <td class="p-4">{{ formation.description }}</td>
            <td class="p-4 flex justify-center space-x-2">
              <button @click="editingUser = { ...user }" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">✏️</button>
              <button @click="deleteUser(user.id)" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Formulaire d'ajout (affiché uniquement si showAddForm est vrai) -->
      <div v-if="showAddForm" class="bg-white shadow rounded p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Ajouter une formation</h2>
        <div class="grid grid-cols-2 gap-4">
          <input v-model="newFormation.name" placeholder="Nom de la formation" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <textarea v-model="newFormation.description" placeholder="Description" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.curriculum" placeholder="Curriculum" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.objectives" placeholder="Objectifs" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.admission_requirements" placeholder="Conditions d'admission" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.career_outcomes" placeholder="Débouchés professionnels" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.skills_acquired" placeholder="Compétences acquises" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.duration_and_structure" placeholder="Durée et structure" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.further_studies" placeholder="Poursuites d'études" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <textarea v-model="newFormation.contact_info" placeholder="Informations de contact" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        <button
          @click="addFormation(); resetNewFormation()"
          class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 mt-4">
          Ajouter
        </button>
      </div>
    </div>

    <!-- Formulaire de modification -->
    <div v-if="editingFormation" class="bg-white shadow rounded p-6 mt-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Modifier la formation</h2>
      <div class="grid grid-cols-2 gap-4">
        <input v-model="editingFormation.name" placeholder="Nom de la formation" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <textarea v-model="editingFormation.description" placeholder="Description" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.curriculum" placeholder="Curriculum" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.objectives" placeholder="Objectifs" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.admission_requirements" placeholder="Conditions d'admission" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.career_outcomes" placeholder="Débouchés professionnels" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.skills_acquired" placeholder="Compétences acquises" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.duration_and_structure" placeholder="Durée et structure" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.further_studies" placeholder="Poursuites d'études" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        <textarea v-model="editingFormation.contact_info" placeholder="Informations de contact" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
      </div>
      <div class="mt-3 flex space-x-2">
        <button @click="updateFormation" class="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">Mettre à jour</button>
        <button @click="editingFormation = null" class="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-200">Annuler</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Ajoutez des styles spécifiques ici si nécessaire */
</style>
