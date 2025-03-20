<template>
    <div>
      <h1>Formation : {{ formationName }}</h1>
      <p v-if="formation">{{ formation.description }}</p>
      <p v-else>Formation introuvable</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['name'],
    data() {
      return {
        formations: [
          { name: 'vuejs', description: 'Formation complète sur Vue.js' },
          { name: 'react', description: 'Formation sur React et ses hooks' }
        ]
      };
    },
    computed: {
      formationName() {
        return this.name; // Récupère le paramètre de l'URL
      },
      formation() {
        return this.formations.find(f => f.name === this.name);
      }
    }
  };
  </script>
  