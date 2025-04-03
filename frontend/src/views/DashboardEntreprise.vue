<template>
    <div class="min-h-screen py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-semibold text-center text-blue-600 mb-6">Tableau de bord - Espace entreprise</h1>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  
          <!-- Tuile Consulter les projets tuteurés -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Acdéder aux projets tuteurés</h2>
            <p class="text-gray-600">Ajouter, modifier et consulter ses projets tuteurés.</p>
            <router-link to="/projets-tutores" class="text-blue-500 mt-4 inline-block">Voir les projets tuteurés</router-link>
          </div>
  
          <!-- Tuile Consulter les offres d'alternances -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Acdéder aux projets tuteurés</h2>
            <p class="text-gray-600">Ajouter, modifier et consulter ses offres d'alternance.</p>
            <router-link to="/alternance" class="text-blue-500 mt-4 inline-block">Voir les offres d'alternance</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardEntreprise'
  }
  </script>
  