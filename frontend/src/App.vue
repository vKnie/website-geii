<template>
  <v-app>
    <!-- Insertion du composant Header ici -->
    <HeaderComponent />

    <!-- Le reste de ton application -->
    <router-view />
  </v-app>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
};
</script>
