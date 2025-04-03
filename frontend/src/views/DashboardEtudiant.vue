<template>
    <div class="min-h-screen py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-semibold text-center text-blue-600 mb-6">Tableau de bord - Espace étudiant</h1>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <!-- Tuile Accéder à ses notes -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Accéder à ses notes</h2>
            <p class="text-gray-600">Consultez vos notes actuelles et vos résultats de vos examens et devoirs.</p>
            <router-link to="/notes" class="text-blue-500 mt-4 inline-block">Voir mes notes</router-link>
          </div>
  
          <!-- Tuile Accéder à l'emploi du temps -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Accéder à l'emploi du temps</h2>
            <p class="text-gray-600">Consultez votre emploi du temps pour savoir quand et où vos cours auront lieu.</p>
            <router-link to="/emploi-du-temps" class="text-blue-500 mt-4 inline-block">Voir mon emploi du temps</router-link>
          </div>
  
          <!-- Tuile Consulter les projets tuteurés -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Consulter les projets tuteurés</h2>
            <p class="text-gray-600">Découvrez les projets tuteurés disponibles pour participer et apprendre.</p>
            <router-link to="/projets-tutores" class="text-blue-500 mt-4 inline-block">Voir les projets tuteurés</router-link>
          </div>
  
          <!-- Tuile Consulter les offres d'alternances -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Consulter les offres d'alternances</h2>
            <p class="text-gray-600">Consultez les offres d'alternances ouvertes à candidature pour trouver des opportunités professionnelles.</p>
            <router-link to="/alternance" class="text-blue-500 mt-4 inline-block">Voir les offres d'alternance</router-link>
          </div>
  
          <!-- Tuile Consulter les supports de cours -->
          <div class="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-200">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Consulter les supports de cours</h2>
            <p class="text-gray-600">Accédez aux supports de cours et aux ressources pédagogiques pour réviser vos leçons.</p>
            <router-link to="/supports-de-cours" class="text-blue-500 mt-4 inline-block">Voir les supports de cours</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardEtudiant'
  }
  </script>
  