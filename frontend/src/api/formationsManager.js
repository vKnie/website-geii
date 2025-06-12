// api/formationsManager.js
import { ref, onMounted } from 'vue';

const API_BASE_URL = 'http://localhost:3000/api';

export function useFormationsManager() {
  // État réactif
  const formations = ref([]);
  const newFormation = ref({
    name: '',
    description: '',
    curriculum: '',
    objectives: '',
    admission_requirements: '',
    career_outcomes: '',
    skills_acquired: '',
    duration_and_structure: '',
    further_studies: '',
    contact_info: ''
  });
  const editingFormation = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  // Fonction utilitaire pour gérer les erreurs
  const handleError = (error, context) => {
    console.error(`Erreur ${context}:`, error);
    
    if (error.response) {
      // Erreur de réponse du serveur
      const message = error.response.data?.error || `Erreur ${error.response.status}`;
      alert(`Erreur: ${message}`);
    } else if (error.request) {
      // Erreur de réseau
      alert('Erreur de connexion au serveur. Vérifiez que le backend est démarré.');
    } else {
      // Autre erreur
      alert(`Erreur: ${error.message}`);
    }
  };

  // Récupérer toutes les formations
  const fetchFormations = async () => {
    isLoading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(`${API_BASE_URL}/formations`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      formations.value = data;
    } catch (err) {
      handleError(err, 'récupération des formations');
      formations.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  // Récupérer une formation par ID
  const fetchFormationById = async (id) => {
    isLoading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(`${API_BASE_URL}/formations/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      handleError(err, 'récupération de la formation');
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  // Ajouter une nouvelle formation
  const addFormation = async () => {
    if (!newFormation.value.name || !newFormation.value.description) {
      alert('Veuillez remplir au minimum le nom et la description de la formation');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/formations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormation.value),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert('Formation ajoutée avec succès!');
      
      // Rafraîchir la liste des formations
      await fetchFormations();
      
      // Réinitialiser le formulaire
      newFormation.value = {
        name: '',
        description: '',
        curriculum: '',
        objectives: '',
        admission_requirements: '',
        career_outcomes: '',
        skills_acquired: '',
        duration_and_structure: '',
        further_studies: '',
        contact_info: ''
      };
      
    } catch (err) {
      handleError(err, 'ajout formation');
    }
  };

  // Mettre à jour une formation
  const updateFormation = async () => {
    if (!editingFormation.value || !editingFormation.value.id) {
      alert('Aucune formation sélectionnée pour la modification');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/formations/${editingFormation.value.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingFormation.value),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert('Formation mise à jour avec succès!');
      
      // Rafraîchir la liste des formations
      await fetchFormations();
      
      // Fermer le formulaire d'édition
      editingFormation.value = null;
      
    } catch (err) {
      handleError(err, 'mise à jour formation');
    }
  };

  // Supprimer une formation
  const deleteFormation = async (formationId) => {
    if (!formationId) {
      alert('ID formation invalide');
      return;
    }

    // Demander confirmation
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette formation?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/formations/${formationId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert('Formation supprimée avec succès!');
      
      // Rafraîchir la liste des formations
      await fetchFormations();
      
    } catch (err) {
      handleError(err, 'suppression formation');
    }
  };

  // Charger les données au montage du composant
  onMounted(() => {
    fetchFormations();
  });

  // Retourner les données et fonctions réactives
  return {
    // État
    formations,
    newFormation,
    editingFormation,
    isLoading,
    error,
    
    // Actions
    fetchFormations,
    fetchFormationById,
    addFormation,
    updateFormation,
    deleteFormation
  };
}