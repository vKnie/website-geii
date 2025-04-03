<template>
    <div class="min-h-screen py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-semibold text-center text-blue-600 mb-6">Tableau de bord - Espace enseignant</h1>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <!-- Tuile Accéder aux notes -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Accéder aux notes</h2>
            <p class="text-gray-600">Ajouter, modifier et consulter les notes déposées.</p>
            <router-link to="/notes" class="text-blue-500 mt-4 inline-block">Voir les notes</router-link>
          </div>
  
          <!-- Tuile Accéder à l'emploi du temps -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Accéder à l'emploi du temps</h2>
            <p class="text-gray-600">Consultez votre emploi du temps pour savoir quand et où vos cours auront lieu.</p>
            <router-link to="/emploi-du-temps" class="text-blue-500 mt-4 inline-block">Voir mon emploi du temps</router-link>
          </div>
  
          <!-- Tuile Consulter les supports de cours -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Deposer les supports de cours</h2>
            <p class="text-gray-600">Ajoutez et consultez les supports de cours en PDF.</p>
            <router-link to="/supports-de-cours" class="text-blue-500 mt-4 inline-block">Voir les supports de cours</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardEnseignant'
  }
  </script>
  