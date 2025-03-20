<script setup>
import { useUserManager } from "../../api/userManager.js";

const { users, newUser, editingUser, isLoading, addUser, updateUser, deleteUser } = useUserManager();
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold text-center mb-6">Gestion des utilisateurs</h1>

    <!-- Formulaire d'ajout -->
    <div class="bg-gray-100 p-4 shadow rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-3">Ajouter un utilisateur</h2>
      <div class="grid grid-cols-2 gap-4">
        <input v-model="newUser.first_name" placeholder="Prénom" class="p-2 border rounded w-full" required />
        <input v-model="newUser.last_name" placeholder="Nom" class="p-2 border rounded w-full" required />
        <input v-model="newUser.email" type="email" placeholder="Email" class="p-2 border rounded w-full" required />
        <input v-model="newUser.password" type="password" placeholder="Mot de passe" class="p-2 border rounded w-full" required />
        <select v-model="newUser.role" class="p-2 border rounded w-full col-span-2">
            <option value="student">Étudiant</option>
            <option value="teacher">Enseignant</option>
            <option value="staff">Personnel</option>
            <option value="company">Entreprise</option>
            <option value="public">Public</option>
        </select>
      </div>
      <button @click="addUser" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-3">Ajouter</button>
    </div>

    <!-- Liste des utilisateurs -->
    <h2 class="text-xl font-semibold mb-3">Liste des utilisateurs</h2>
    <div v-if="isLoading" class="text-center text-gray-500">Chargement...</div>
    <table v-else class="w-full bg-white shadow rounded-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-700">
          <th class="p-3 text-left">ID</th>
          <th class="p-3 text-left">Nom</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left">Rôle</th>
          <th class="p-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="border-t">
          <td class="p-3">{{ user.id }}</td>
          <td class="p-3">{{ user.first_name }} {{ user.last_name }}</td>
          <td class="p-3">{{ user.email }}</td>
          <td class="p-3">{{ user.role }}</td>
          <td class="p-3 flex justify-center space-x-2">
            <button @click="editingUser = { ...user }" class="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">✏️</button>
            <button @click="deleteUser(user.id)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Formulaire de modification -->
    <div v-if="editingUser" class="bg-gray-100 p-4 shadow rounded-lg mt-6">
      <h2 class="text-xl font-semibold mb-3">Modifier l'utilisateur</h2>
      <div class="grid grid-cols-2 gap-4">
        <input v-model="editingUser.first_name" placeholder="Prénom" class="p-2 border rounded w-full" required />
        <input v-model="editingUser.last_name" placeholder="Nom" class="p-2 border rounded w-full" required />
        <input v-model="editingUser.email" type="email" placeholder="Email" class="p-2 border rounded w-full" required />
        <input v-model="editingUser.password" type="password" placeholder="Mot de passe" class="p-2 border rounded w-full" required />
        <select v-model="newUser.role" class="p-2 border rounded w-full col-span-2">
            <option value="student">Étudiant</option>
            <option value="teacher">Enseignant</option>
            <option value="staff">Personnel</option>
            <option value="company">Entreprise</option>
            <option value="public">Public</option>
        </select>
      </div>
      <div class="mt-3 flex space-x-2">
        <button @click="updateUser" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Mettre à jour</button>
        <button @click="editingUser = null" class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Annuler</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
}
</style>
