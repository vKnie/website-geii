<template>
  <nav class="bg-blue-500 p-4 shadow-md">
    <div class="container mx-auto flex items-center justify-between">

      <!-- Logo -->
      <div class="text-white font-bold text-xl">
        <router-link to="/" class="logo-link">
          <img src="../assets/logo.png" alt="Logo IUT" class="logo">
        </router-link>
      </div>

      <!-- Menu hamburger -->
      <div class="lg:hidden flex items-center">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Menu de navigation -->
      <ul :class="{'flex': !isMenuOpen, 'hidden': isMenuOpen, 'lg:flex': true} " class="flex flex-col lg:flex-row space-x-4 text-white relative">

        <!-- Menu Départment GEII -->
        <li class="relative group">
          <router-link to="/departementGEII" class="hover:underline">Département GEII</router-link>
          <ul class="absolute left-0 mt-0 w-48 bg-white text-black shadow-md rounded-lg opacity-1 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/generalite-but-geii">Généralité BUT GEII</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/lieu-de-formation">Lieu de formation</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/programme">Programme</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/specificite-du-but-geii">Spécificité du BUT GEII</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/formation-en-alternance">Formation en Alternance</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <router-link to="/departementGEII/apres-le-but-geii">Après le BUT GEII</router-link>
            </li>
          </ul>
        </li>

        <!-- Menu Formations -->
        <li class="relative group">
          <router-link to="/formations" class="hover:underline">Formations</router-link>
          <ul class="absolute left-0 mt-0 w-48 bg-white text-black shadow-md rounded-lg opacity-1 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
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

        <!-- Autres Liens -->
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
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false, // Contrôle l'ouverture du menu sur mobile
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
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

/* Styles pour les écrans larges */
@media (max-width: 1024px) {
  .lg\:hidden {
    display: block !important;
  }

  .lg\:flex {
    display: none !important;
  }
}

</style>