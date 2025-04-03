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
  <main class="flex-1 p-6">
    <header class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Gestion des utilisateurs</h1>
      <button
        @click="toggleAddForm"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        {{ showAddForm ? 'Annuler l\'ajout' : 'Ajouter un utilisateur' }}
      </button>
    </header>

    <!-- Formulaire d'ajout (affiché uniquement si showAddForm est vrai) -->
    <div v-if="showAddForm" class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Ajouter un utilisateur</h2>
      <div class="grid grid-cols-2 gap-4">
        <input v-model="newUser.first_name" placeholder="Prénom" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <input v-model="newUser.last_name" placeholder="Nom" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <input v-model="newUser.email" type="email" placeholder="Email" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <input v-model="newUser.password" type="password" placeholder="Mot de passe" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <select v-model="newUser.role" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
          <option value="student">Étudiant</option>
          <option value="teacher">Enseignant</option>
          <option value="staff">Personnel</option>
          <option value="company">Entreprise</option>
          <option value="public">Public</option>
        </select>
      </div>
      <button
        @click="addUser(); resetNewUser()"
        class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 mt-4">
        Ajouter
      </button>
    </div>

    <!-- Liste des utilisateurs -->
    <div v-if="isLoading" class="text-center text-gray-500 mb-6">Chargement...</div>
    <div v-else class="bg-white shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="p-4 text-left">ID</th>
            <th class="p-4 text-left">Nom</th>
            <th class="p-4 text-left">Email</th>
            <th class="p-4 text-left">Rôle</th>
            <th class="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100 transition duration-200">
            <td class="p-4">{{ user.id }}</td>
            <td class="p-4">{{ user.first_name }} {{ user.last_name }}</td>
            <td class="p-4">{{ user.email }}</td>
            <td class="p-4">{{ user.role }}</td>
            <td class="p-4 flex justify-center space-x-2">
              <button @click="editingUser = { ...user }" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">✏️</button>
              <button @click="deleteUser(user.id)" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Formulaire de modification -->
    <div v-if="editingUser" class="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Modifier l'utilisateur</h2>
      <div class="grid grid-cols-2 gap-4">
        <input v-model="editingUser.first_name" placeholder="Prénom" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <input v-model="editingUser.last_name" placeholder="Nom" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <input v-model="editingUser.email" type="email" placeholder="Email" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <input v-model="editingUser.password" type="password" placeholder="Mot de passe" class="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
        <select v-model="editingUser.role" class="p-3 border rounded-lg w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
          <option value="student">Étudiant</option>
          <option value="teacher">Enseignant</option>
          <option value="staff">Personnel</option>
          <option value="company">Entreprise</option>
          <option value="public">Public</option>
        </select>
      </div>
      <div class="mt-3 flex space-x-2">
        <button @click="updateUser" class="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">Mettre à jour</button>
        <button @click="editingUser = null" class="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-200">Annuler</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Ajoutez des styles spécifiques ici si nécessaire */
</style>
