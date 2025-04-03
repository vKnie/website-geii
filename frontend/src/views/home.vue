<template>
    <div>
      <!-- Navbar -->
      <Navbar />
  
      <!-- Contenu principal de la page d'accueil -->
      <main class="container mx-auto p-4">
        <!-- Section de bienvenue -->
        <section class="text-center py-16">
          <h1 class="text-4xl font-semibold text-blue-600">Bienvenue au Département GEII</h1>
          <p class="text-lg text-gray-700 mt-4">
            Découvrez nos formations et services dédiés aux étudiants, enseignants, et entreprises. Explorez les opportunités et rejoignez une communauté innovante.
          </p>
          <div class="mt-8">
            <router-link 
              to="/formations" 
              class="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Découvrez nos formations
            </router-link>
          </div>
        </section>
  
        <!-- Section témoignages ou avis -->
        <section class="text-center py-16 bg-gray-100">
          <h2 class="text-3xl font-semibold text-blue-600">Ce que disent nos étudiants</h2>
          <p class="text-lg text-gray-700 mt-4">Nos étudiants partagent leurs expériences et réussites dans le département GEII.</p>
  
          <div class="flex justify-center mt-8">
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-xs mx-4">
              <p class="text-gray-600 italic">"L'approche pratique du GEII m'a permis de mettre en application mes compétences rapidement."</p>
              <p class="mt-4 font-semibold text-blue-500">Marie, étudiante en GEII</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-xs mx-4">
              <p class="text-gray-600 italic">"Grâce aux projets tuteurés, j'ai acquis des compétences techniques et humaines précieuses."</p>
              <p class="mt-4 font-semibold text-blue-500">Paul, étudiant en GEII</p>
            </div>
          </div>
        </section>
  
        <!-- Section contact ou appel à l'action -->
        <section class="text-center py-16">
          <h2 class="text-3xl font-semibold text-blue-600">Contactez-nous</h2>
          <p class="text-lg text-gray-700 mt-4">Vous avez des questions ? N'hésitez pas à nous contacter pour plus d'informations.</p>
          <div class="mt-8">
            <router-link 
              to="/contact" 
              class="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Nous contacter
            </router-link>
          </div>
        </section>
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script> 
  