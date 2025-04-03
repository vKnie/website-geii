<template>
  <div>
    <Navbar v-if="!isAdminRoute" />
    <main>
      <!-- Ici, tu peux mettre le contenu principal de tes pages -->
      <router-view />
    </main>
    <Footer v-if="!isAdminRoute" />
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