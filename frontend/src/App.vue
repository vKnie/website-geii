<template>
  <div>
    <Navbar />
    <main class="container mx-auto p-4">
      <!-- Ici, tu peux mettre le contenu principal de tes pages -->
      <router-view />
    </main>
    <Footer />
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
  }
}
</script>

<style scoped>
/* Tu peux ajouter des styles globaux ici si nécessaire */
</style>
