<template>
  <div class="flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-semibold text-center mb-6">Espace Personnel</h2>

      <!-- Formulaire de connexion -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Entrez votre email"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <div class="flex items-center justify-between">
          <button 
            type="submit" 
            class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Se connecter
          </button>
        </div>

        <!-- Lien de réinitialisation du mot de passe -->
        <div class="mt-4 text-center">
          <router-link to="/reset-password" class="text-sm text-blue-500 hover:underline">
            Mot de passe oublié ?
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<!-- <script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    const router = useRouter();

    const handleSubmit = () => {
      if (email.value === "etudiant@mail.com" && password.value === "1234") {
        console.log("Connexion réussie !");

        router.push("/dashbord-etudiant");
      } else {
        alert("Identifiants incorrects !");
      }
    };

    return { email, password, handleSubmit };
  },
};
</script> -->

<script>
export default {
  name: 'EspaceEtudiant'
}
</script>
