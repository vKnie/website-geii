<template>
  <nav class="bg-blue-500 shadow-md relative">
    <div class="container mx-auto flex items-center justify-between">

      <!-- Logo -->
      <div class="text-white font-bold text-xl">
        <router-link to="/" class="logo-link">
          <img src="../assets/logo2.png" alt="Logo IUT" class="w-50 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        </router-link>
      </div>

      <!-- Menu hamburger -->
      <button @click="toggleMenu" class="lg:hidden text-white focus:outline-none z-50 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu de navigation -->
      <ul :class="isMenuOpen ? 'flex' : 'hidden'"
          class="lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-white absolute lg:relative top-16 lg:top-0 right-0 w-full lg:w-auto bg-blue-500 lg:bg-transparent py-4 lg:py-0 shadow-lg lg:shadow-none z-40">

        <!-- Menu Département GEII -->
        <li class="relative group">
          <button @click="toggleSubMenu('geii')" class="w-full text-left hover:underline flex justify-between items-center lg:hidden px-4 py-2">
            Département GEII ▼
          </button>
          <router-link to="/departementGEII" class="hover:underline lg:block px-4 py-2 block">Département GEII</router-link>
          <ul :class="isSubMenuOpen === 'geii' ? 'block' : 'hidden'" 
              class="lg:block lg:absolute right-0 mt-0 w-48 bg-white text-black shadow-md rounded-lg lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-300 z-50">
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/generalite-but-geii" class="block px-4 py-2">Généralité BUT GEII</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/lieu-de-formation" class="block px-4 py-2">Lieu de formation</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/programme" class="block px-4 py-2">Programme</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/specificite-du-but-geii" class="block px-4 py-2">Spécificité du BUT GEII</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/formation-en-alternance" class="block px-4 py-2">Formation en Alternance</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/apres-le-but-geii" class="block px-4 py-2">Après le BUT GEII</router-link></li>
          </ul>
        </li>

        <!-- Menu Formations -->
        <li class="relative group">
          <button @click="toggleSubMenu('formations')" class="w-full text-left hover:underline flex justify-between items-center lg:hidden px-4 py-2">
            Formations ▼
          </button>
          <router-link to="/formations" class="hover:underline lg:block px-4 py-2 block">Formations</router-link>
          <ul :class="isSubMenuOpen === 'formations' ? 'block' : 'hidden'" 
              class="lg:block lg:absolute right-0 mt-0 w-48 bg-white text-black shadow-md rounded-lg lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-300 z-50">
            <li class="hover:bg-gray-200"><router-link to="/formations/lpmiaw" class="block px-4 py-2">LP MIAW</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/formations/lpabdd" class="block px-4 py-2">LP ABDD</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/formations/lpgthbt" class="block px-4 py-2">LP GTHBT</router-link></li>
          </ul>
        </li>

        <!-- Autres Liens -->
        <li><router-link to="/espace-etudiant" class="hover:underline px-4 py-2 block">Espace étudiant</router-link></li>
        <li><router-link to="/espace-enseignant" class="hover:underline px-4 py-2 block">Espace enseignant</router-link></li>
        <li><router-link to="/espace-entreprise" class="hover:underline px-4 py-2 block">Espace entreprise</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      isSubMenuOpen: null
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) this.isSubMenuOpen = null;
    },
    toggleSubMenu(menu) {
      this.isSubMenuOpen = this.isSubMenuOpen === menu ? null : menu;
    }
  }
}
</script>
