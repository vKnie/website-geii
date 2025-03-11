<template>
  <v-app-bar app color="indigo" dark>
    <v-toolbar-title>
      <v-img
        src="@/assets/logo.png"
        alt="Logo"
        max-width="50"
        contain
      ></v-img>
      <span class="ml-2">Mon Application</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text @click="goHome">
      Accueil
    </v-btn>
    <v-btn text @click="goAbout">
      À propos
    </v-btn>

    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="goProfile">
          <v-list-item-title>Profil</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goSettings">
          <v-list-item-title>Paramètres</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goLogout">
          <v-list-item-title>Déconnexion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    goHome() {
      this.$router.push('/');
    },
    goAbout() {
      this.$router.push('/about');
    },
    goProfile() {
      this.$router.push('/profile');
    },
    goSettings() {
      this.$router.push('/settings');
    },
    goLogout() {
      // Logique de déconnexion
      this.$router.push('/login');
    },
  },
};
</script>
