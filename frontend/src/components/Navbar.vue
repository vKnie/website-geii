<template>
    <nav class="bg-blue-500 p-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white font-bold text-xl">
          <router-link to="/">MonLogo</router-link>
        </div>
        <ul class="flex space-x-4 text-white">
          <li>
            <router-link to="/" class="hover:underline">Accueil</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:underline">À propos</router-link>
          </li>
          <li>
            <router-link to="/services" class="hover:underline">Services</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:underline">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Tu peux ajouter des styles spécifiques pour ta navbar si nécessaire */
  </style>
  