<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 lg:px-6 py-12">
      
      <!-- En-tête de section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Département du GEII
        </h1>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <!-- Contenu principal -->
      <div class="max-w-4xl mx-auto">
        
        <!-- Card principale -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 space-y-8">
          
          <!-- Paragraphe 1 -->
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed text-justify">
              Les secteurs traditionnels d'activité (industries électriques et électroniques,
              appareillages et instrumentation, production et transport d'énergie, télécommunications,
              technologies de l'information et de la communication) se sont élargis en raison des multiples
              applications de l'électricité et de l'informatique.
            </p>
          </div>

          <!-- Séparateur visuel -->
          <div class="border-l-4 border-blue-100 pl-6">
            <p class="text-gray-700 leading-relaxed text-justify">
              Étant donnée la généralisation de l'électronique et de l'informatique industrielle dans
              bon nombre d'activités, les compétences du diplômé GEII s'exercent dans des secteurs aussi
              divers que : les industries de transformation et manufacturières, la production et la gestion de
              l'énergie, l'industrie électronique, les transports et l'automobile, l'aérospatial et la défense,
              la construction et le bâtiment, la santé, l'agroalimentaire et les agro-industries.
            </p>
          </div>

          <!-- Section avec icône -->
          <div class="bg-blue-50 rounded-lg p-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed text-justify">
                Dans une grande entreprise, dans une petite entreprise ou dans un laboratoire de recherche.
                Il exerce ses fonctions de technicien dans les domaines des études et du développement,
                de l'industrialisation et de la production, de l'automatisation, de l'intégration
                de systèmes, de la maintenance, de l'assurance qualité et des services, voire du commerce.
              </p>
            </div>
          </div>

          <!-- Section métiers avec mise en évidence -->
          <div class="border-t border-gray-200 pt-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6.083"></path>
              </svg>
              Métiers et spécialisations
            </h3>
            <p class="text-gray-700 leading-relaxed text-justify">
              Les métiers d'électronicien, électrotechnicien, automaticien ou technicien de maintenance
              couvrent une large palette d'emplois spécifiques : méthodiste–industrialisateur, chargé d'études,
              chargé d'affaires, chargé d'essais, responsable d'équipes de fabrication, coordonnateur maintenance,
              développeur, concepteur-chargé de gammes, automaticien régulation, spécialiste process, informaticien industriel, etc.
            </p>
          </div>

        </div>

        <!-- Section supplémentaire avec CTA -->
        <div class="mt-8 text-center">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p class="text-gray-600 mb-4">
              Découvrez en détail notre formation et ses spécificités
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <router-link 
                to="/departementGEII/programme" 
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Voir le programme
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
              <router-link 
                to="/departementGEII/specificite-du-but-geii" 
                class="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Nos spécificités
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'departementGEII'
}
</script>