<template>
    <nav class="bg-blue-500 p-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white font-bold text-xl">
          <router-link to="/" class="logo-link">
            <img src="../assets/logo1.png" alt="Logo IUT" class="logo">
          </router-link>
        </div>
        <ul class="flex space-x-4 text-white">
          <li>
            <router-link to="/" class="hover:underline">Accueil</router-link>
          </li>
          <li>
            <router-link to="/présentation" class="hover:underline ">Département GEII</router-link>
          </li>
          <li>
            <router-link to="/formations" class="hover:underline">Formations</router-link>
          </li>
          <li>
            <router-link to="/espace-etudiant" class="hover:underline">Espace étudiant</router-link>
          </li>
          <li>
            <router-link to="/espace-enseignant" class="hover:underline">Espace enseignant</router-link>
          </li>
          <li>
            <router-link to="/espace-entreprise" class="hover:underline">Espace entreprise</router-link>
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

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffaa00;
    font-weight: 700;
  }
  
  .logo {
    width: 100px;
    cursor: pointer;
  }

  .logo:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }

  li {
    cursor: pointer;
  }
  
  li:hover{
    transform: scale(1.1);
    transition: transform 0.3s ease, text-decoration 0.3s ease;
  }
  </style>
  