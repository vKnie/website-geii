<template>
    <main class="flex-1 p-6">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Bienvenue sur le Tableau de Bord Admin</h1>
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ajouter un élément</button>
      </header>
  
      <!-- Content Area -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white shadow rounded p-6">
          <h3 class="text-lg font-semibold text-gray-800">Statistiques</h3>
          <p class="mt-2 text-gray-600">Afficher les statistiques ici.</p>
        </div>
        <div class="bg-white shadow rounded p-6">
          <h3 class="text-lg font-semibold text-gray-800">Activités Récentes</h3>
          <p class="mt-2 text-gray-600">Afficher les activités récentes ici.</p>
        </div>
        <div class="bg-white shadow rounded p-6">
          <h3 class="text-lg font-semibold text-gray-800">Notifications</h3>
          <p class="mt-2 text-gray-600">Afficher les notifications ici.</p>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard'
  }
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques ici si nécessaire */
  </style>
  