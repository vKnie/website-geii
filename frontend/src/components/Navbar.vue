<template>
  <nav class="bg-blue-500 p-4 shadow-md">

    <div class="container mx-auto flex items-center justify-between">

      <div class="text-white font-bold text-xl">
        <router-link to="/" class="logo-link">
          <img src="../assets/logo.png" alt="Logo IUT" class="logo">
        </router-link>
      </div>

      <ul class="flex space-x-4 text-white relative">

        <li>
          <router-link to="/" class="hover:underline">Accueil</router-link>
        </li>

        <li class="relative group">
          <router-link to="/departementGEII" class="hover:underline">Département GEII</router-link>

          <ul class="absolute left-0 mt-2 w-48 bg-white text-black shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/">Généralité BUT GEII</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/">Lieu de formation</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/">Programme</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/">Spécificité du BUT GEII</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/">Formation en Alternance</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/">Après le BUT GEII</router-link>
            </li>
          </ul>

        </li>
        
        <li class="relative group">
          <router-link to="/formations" class="hover:underline">Formations</router-link>

          <ul class="absolute left-0 mt-2 w-48 bg-white text-black shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/formations/lpmiaw">LP MIAW</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/formations/lpabdd">LP ABDD</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/formations/lpgthbt">LP GTHBT</router-link>
            </li>
          </ul>

        </li>
        
        <li class="relative group">
          <router-link to="/espace-etudiant" class="hover:underline">Espace étudiant</router-link>
        </li>

        <li class="relative group">
          <router-link to="/espace-enseignant" class="hover:underline">Espace enseignant</router-link>
        </li>

        <li class="relative group">
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
  background-color: #004b92;
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

li:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease, text-decoration 0.3s ease;
}
</style>