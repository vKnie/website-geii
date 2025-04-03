<template>
  <nav class="bg-blue-500 shadow-md relative">
    <div class="container mx-auto flex items-center justify-between p-4">

      <!-- Logo -->
      <div class="text-white font-bold text-xl">
        <router-link to="/" class="logo-link">
          <img src="../assets/logo2.png" alt="Logo IUT" class="w-50 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        </router-link>
      </div>

      <!-- Menu Hamburger (Mobile) -->
      <button @click="toggleMenu" class="lg:hidden text-white focus:outline-none z-50 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul class="hidden lg:flex space-x-6 text-white">

        <!-- Département GEII -->
        <li class="relative group">
          <router-link to="/departementGEII" class="hover:underline lg:block px-4 py-2 block">Département GEII</router-link>
          <ul class="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/generalite-but-geii" class="block px-4 py-2">Généralité BUT GEII</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/lieu-de-formation" class="block px-4 py-2">Lieu de formation</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/programme" class="block px-4 py-2">Programme</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/specificite-du-but-geii" class="block px-4 py-2">Spécificité du BUT GEII</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/formation-en-alternance" class="block px-4 py-2">Formation en Alternance</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/departementGEII/apres-le-but-geii" class="block px-4 py-2">Après le BUT GEII</router-link></li>
          </ul>
        </li>

        <!-- Formations -->
        <li class="relative group">
          <router-link to="/formations" class="hover:underline lg:block px-4 py-2 block">Formations</router-link>
          <ul class="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
            <li class="hover:bg-gray-200"><router-link to="/formations/lpmiaw" class="block px-4 py-2">LP MIAW</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/formations/lpabdd" class="block px-4 py-2">LP ABDD</router-link></li>
            <li class="hover:bg-gray-200"><router-link to="/formations/lpgthbt" class="block px-4 py-2">LP GTHBT</router-link></li>
          </ul>
        </li>

        <li><router-link to="/espace-personnel" class="hover:underline px-4 py-2">Espace personnel</router-link></li>
      </ul>
    </div>

    <!-- Menu latéral Mobile -->
    <div 
      :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'" 
      class="fixed top-0 left-0 w-1/2 h-full bg-blue-500 text-white shadow-lg transition-transform duration-300 ease-in-out z-50 p-6 lg:hidden">

      <!-- Bouton de fermeture -->
      <button @click="toggleMenu" class="absolute top-4 right-4 text-white text-2xl focus:outline-none">
        ✖
      </button>

      <!-- Liens du menu mobile -->
      <ul class="mt-10 space-y-6">
        <li><router-link to="/espace-personnel" class="hover:underline block" @click="toggleMenu">Espace personnel</router-link></li>

        <!-- Département GEII (Mobile) -->
        <li>
          <button @click="toggleSubMenu('geii')" class="w-full text-left hover:underline flex justify-between items-center px-4 py-2">
            Département GEII ▼
          </button>
          <ul v-if="isSubMenuOpen === 'geii'" class="ml-4 mt-2 space-y-2">
            <li><router-link to="/departementGEII/generalite-but-geii" class="hover:underline block" @click="toggleMenu">Généralité BUT GEII</router-link></li>
            <li><router-link to="/departementGEII/lieu-de-formation" class="hover:underline block" @click="toggleMenu">Lieu de formation</router-link></li>
            <li><router-link to="/departementGEII/programme" class="hover:underline block" @click="toggleMenu">Programme</router-link></li>
            <li><router-link to="/departementGEII/specificite-du-but-geii" class="hover:underline block" @click="toggleMenu">Spécificité du BUT GEII</router-link></li>
            <li><router-link to="/departementGEII/formation-en-alternance" class="hover:underline block" @click="toggleMenu">Formation en Alternance</router-link></li>
            <li><router-link to="/departementGEII/apres-le-but-geii" class="hover:underline block" @click="toggleMenu">Après le BUT GEII</router-link></li>
          </ul>
        </li>

        <!-- Formations (Mobile) -->
        <li>
          <button @click="toggleSubMenu('formations')" class="w-full text-left hover:underline flex justify-between items-center px-4 py-2">
            Formations ▼
          </button>
          <ul v-if="isSubMenuOpen === 'formations'" class="ml-4 mt-2 space-y-2">
            <li><router-link to="/formations/lpmiaw" class="hover:underline block" @click="toggleMenu">LP MIAW</router-link></li>
            <li><router-link to="/formations/lpabdd" class="hover:underline block" @click="toggleMenu">LP ABDD</router-link></li>
            <li><router-link to="/formations/lpgthbt" class="hover:underline block" @click="toggleMenu">LP GTHBT</router-link></li>
          </ul>
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
