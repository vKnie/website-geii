<template>
  <footer class="bg-white border-t border-gray-200 mt-16">
    <div class="container mx-auto px-4 lg:px-6 py-12">
      
      <!-- Section principale du footer -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        <!-- Logo et description -->
        <div class="col-span-1 md:col-span-1 text-center md:text-left">
          <div class="mb-4">
            <img 
              src="../assets/logo2.png" 
              alt="Logo IUT" 
              class="h-16 w-auto mx-auto md:mx-0"
            >
          </div>
          <p class="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Institut Universitaire de Technologie - Département GEII
            <br>
            Formation d'excellence en génie électrique et informatique industrielle.
          </p>
        </div>

        <!-- Liens rapides -->
        <div class="text-center md:text-left">
          <h4 class="text-gray-900 font-semibold mb-4">Formations</h4>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/departementGEII" 
                class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                BUT GEII
              </router-link>
            </li>
            <li>
              <router-link 
                to="/formations/lpmiaw" 
                class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                LP MIAW
              </router-link>
            </li>
            <li>
              <router-link 
                to="/formations/lpabdd" 
                class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                LP ABDD
              </router-link>
            </li>
            <li>
              <router-link 
                to="/formations/lpgthbt" 
                class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                LP GTHBT
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact et informations -->
        <div class="text-center md:text-left">
          <h4 class="text-gray-900 font-semibold mb-4">Informations</h4>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/departementGEII/lieu-de-formation" 
                class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                Lieu de formation
              </router-link>
            </li>
            <li>
              <router-link 
                to="/departementGEII/formation-en-alternance" 
                class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                Formation en alternance
              </router-link>
            </li>
            <li>
              <router-link 
                to="/espace-personnel" 
                class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                Espace personnel
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-gray-200 pt-8">
        
        <!-- Section copyright et liens légaux -->
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <!-- Copyright -->
          <div class="text-center md:text-left">
            <p class="text-gray-600 text-sm">
              &copy; 2025 Département GEII. Tous droits réservés.
            </p>
          </div>

          <!-- Liens légaux -->
          <div class="flex flex-wrap justify-center md:justify-end space-x-6">
            <a 
              href="#" 
              class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              Politique de confidentialité
            </a>
            <a 
              href="#" 
              class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              Conditions d'utilisation
            </a>
            <a 
              href="#" 
              class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              Support
            </a>
          </div>
        </div>

        <!-- Mention additionnelle -->
        <div class="mt-6 text-center">
          <p class="text-gray-500 text-xs">
            Site développé avec Vue.js - Design moderne et responsive
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>