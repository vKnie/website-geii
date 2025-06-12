<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 lg:px-6 py-12">
      
      <!-- En-tête de section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Nos Formations
        </h1>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
          Découvrez l'ensemble de nos formations et trouvez celle qui correspond à vos ambitions professionnelles
        </p>
      </div>

      <!-- Indicateur de chargement -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Message d'erreur -->
      <div v-if="error && !isLoading" class="max-w-4xl mx-auto mb-8">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <p class="text-red-800">Une erreur est survenue lors du chargement des formations.</p>
          </div>
        </div>
      </div>

      <!-- Liste des formations -->
      <div v-if="!isLoading && formations.length > 0" class="max-w-6xl mx-auto">
        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div 
            v-for="formation in formations" 
            :key="formation.id"
            class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <!-- En-tête de la carte -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h3 class="text-xl font-bold mb-2">{{ formation.name }}</h3>
              <div class="w-12 h-1 bg-white/30 rounded-full"></div>
            </div>

            <!-- Contenu de la carte -->
            <div class="p-6 space-y-4">
              <!-- Description -->
              <div v-if="formation.description">
                <p class="text-gray-700 leading-relaxed text-sm">
                  {{ truncateText(formation.description, 120) }}
                </p>
              </div>

              <!-- Durée et structure -->
              <div v-if="formation.duration_and_structure" class="bg-blue-50 rounded-lg p-4">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold text-blue-900 mb-1">Durée et structure</h4>
                    <p class="text-blue-800 text-sm">{{ truncateText(formation.duration_and_structure, 80) }}</p>
                  </div>
                </div>
              </div>

              <!-- Compétences acquises -->
              <div v-if="formation.skills_acquired" class="border-l-4 border-green-200 pl-4">
                <h4 class="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Compétences
                </h4>
                <p class="text-gray-600 text-sm">{{ truncateText(formation.skills_acquired, 100) }}</p>
              </div>

              <!-- Débouchés -->
              <div v-if="formation.career_outcomes" class="border-l-4 border-purple-200 pl-4">
                <h4 class="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <svg class="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  Débouchés
                </h4>
                <p class="text-gray-600 text-sm">{{ truncateText(formation.career_outcomes, 100) }}</p>
              </div>
            </div>

            <!-- Footer de la carte -->
            <div class="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <button 
                @click="selectFormation(formation)"
                class="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                Voir les détails
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Message si aucune formation -->
      <div v-if="!isLoading && formations.length === 0 && !error" class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucune formation disponible</h3>
          <p class="text-gray-600">Les formations seront bientôt disponibles. Revenez plus tard !</p>
        </div>
      </div>

    </div>

    <!-- Modal de détails -->
    <div v-if="selectedFormation" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" @click="closeModal">
      <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <!-- En-tête du modal -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div class="flex justify-between items-start">
            <div>
              <h2 class="text-2xl font-bold mb-2">{{ selectedFormation.name }}</h2>
              <div class="w-16 h-1 bg-white/30 rounded-full"></div>
            </div>
            <button @click="closeModal" class="text-white hover:text-gray-200 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Contenu du modal -->
        <div class="p-6 space-y-6">
          <!-- Description -->
          <div v-if="selectedFormation.description">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p class="text-gray-700 leading-relaxed">{{ selectedFormation.description }}</p>
          </div>

          <!-- Objectifs -->
          <div v-if="selectedFormation.objectives" class="bg-blue-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-blue-900 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Objectifs
            </h3>
            <p class="text-blue-800 leading-relaxed">{{ selectedFormation.objectives }}</p>
          </div>

          <!-- Curriculum -->
          <div v-if="selectedFormation.curriculum">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              Programme
            </h3>
            <p class="text-gray-700 leading-relaxed">{{ selectedFormation.curriculum }}</p>
          </div>

          <!-- Conditions d'admission -->
          <div v-if="selectedFormation.admission_requirements" class="border-l-4 border-orange-200 pl-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <svg class="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Conditions d'admission
            </h3>
            <p class="text-gray-700 leading-relaxed">{{ selectedFormation.admission_requirements }}</p>
          </div>

          <!-- Compétences acquises -->
          <div v-if="selectedFormation.skills_acquired" class="border-l-4 border-green-200 pl-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Compétences acquises
            </h3>
            <p class="text-gray-700 leading-relaxed">{{ selectedFormation.skills_acquired }}</p>
          </div>

          <!-- Durée et structure -->
          <div v-if="selectedFormation.duration_and_structure" class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Durée et structure
            </h3>
            <p class="text-gray-700 leading-relaxed">{{ selectedFormation.duration_and_structure }}</p>
          </div>

          <!-- Débouchés -->
          <div v-if="selectedFormation.career_outcomes" class="border-l-4 border-purple-200 pl-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <svg class="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              Débouchés professionnels
            </h3>
            <p class="text-gray-700 leading-relaxed">{{ selectedFormation.career_outcomes }}</p>
          </div>

          <!-- Poursuite d'études -->
          <div v-if="selectedFormation.further_studies" class="bg-indigo-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-indigo-900 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
              Poursuite d'études
            </h3>
            <p class="text-indigo-800 leading-relaxed">{{ selectedFormation.further_studies }}</p>
          </div>

          <!-- Contact -->
          <div v-if="selectedFormation.contact_info" class="bg-yellow-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact
            </h3>
            <p class="text-yellow-800 leading-relaxed">{{ selectedFormation.contact_info }}</p>
          </div>
        </div>

        <!-- Footer du modal -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div class="flex justify-end">
            <button 
              @click="closeModal"
              class="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFormationsManager } from './../api/formationsManager.js'
import { ref } from 'vue'

export default {
  name: 'Formation',
  setup() {
    const { formations, isLoading, error, fetchFormations } = useFormationsManager()
    const selectedFormation = ref(null)

    // Fonction pour tronquer le texte
    const truncateText = (text, maxLength) => {
      if (!text) return ''
      if (text.length <= maxLength) return text
      return text.substring(0, maxLength) + '...'
    }

    // Fonction pour sélectionner une formation
    const selectFormation = (formation) => {
      selectedFormation.value = formation
    }

    // Fonction pour fermer le modal
    const closeModal = () => {
      selectedFormation.value = null
    }

    return {
      formations,
      isLoading,
      error,
      selectedFormation,
      truncateText,
      selectFormation,
      closeModal,
      fetchFormations
    }
  }
}
</script>

<style scoped>
/* Animations personnalisées */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.card-enter-active {
  animation: fadeIn 0.6s ease-out;
}

/* Scroll personnalisé pour le modal */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>