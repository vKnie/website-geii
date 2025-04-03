<template>
  <div class="flex flex-col min-h-screen"> <!-- Utilisation de flex pour toute la page -->
    <Navbar v-if="!isAdminRoute" />
    <main class="container flex-grow"> <!-- Le contenu principal prend tout l'espace restant -->
      <router-view />
    </main>
    <Footer v-if="!isAdminRoute" class="mt-auto" /> <!-- Le footer est toujours poussé vers le bas -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  computed: {
    isAdminRoute() {
      return this.$route.path.startsWith('/admin');
    }
  }
}
</script>