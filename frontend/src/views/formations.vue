<template>
  <div class="min-h-screen py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Nos Formations</h1>

      <!-- Tuiles de formations -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Tuile 1 -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 text-blue-500 mx-auto mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Formation 1: LP MIAW</h3>
            <p class="text-gray-600 mb-4">Formation en Licence Professionnelle MIAW, spécialisée dans les métiers de l'informatique et de l'automatisation.</p>
            <router-link to="/formations/lpmiaw" class="text-blue-500 hover:underline">En savoir plus</router-link>
          </div>
        </div>

        <!-- Tuile 2 -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 text-blue-500 mx-auto mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Formation 2: LP ABDD</h3>
            <p class="text-gray-600 mb-4">Formation en Licence Professionnelle ABDD, axée sur les bases de données, la gestion et l'analyse des données.</p>
            <router-link to="/formations/lpabdd" class="text-blue-500 hover:underline">En savoir plus</router-link>
          </div>
        </div>

        <!-- Tuile 3 -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 text-blue-500 mx-auto mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Formation 3: LP GTHBT</h3>
            <p class="text-gray-600 mb-4">Formation en Licence Professionnelle GTHBT, spécialisée dans les systèmes et technologies du bâtiment.</p>
            <router-link to="/formations/lpgthbt" class="text-blue-500 hover:underline">En savoir plus</router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formations',
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
</style>
