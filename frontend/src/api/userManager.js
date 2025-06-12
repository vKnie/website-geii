// api/userManager.js
import { ref, onMounted } from 'vue';

const API_BASE_URL = 'http://localhost:3000/api';

export function useUserManager() {
  // État réactif
  const users = ref([]);
  const newUser = ref({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'student'
  });
  const editingUser = ref(null);
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

  // Récupérer tous les utilisateurs
  const fetchUsers = async () => {
    isLoading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      users.value = data;
    } catch (err) {
      handleError(err, 'récupération des utilisateurs');
      users.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  // Ajouter un nouvel utilisateur
  const addUser = async () => {
    if (!newUser.value.first_name || !newUser.value.last_name || !newUser.value.email || !newUser.value.password) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser.value),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert('Utilisateur ajouté avec succès!');
      
      // Rafraîchir la liste des utilisateurs
      await fetchUsers();
      
      // Réinitialiser le formulaire
      newUser.value = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: 'student'
      };
      
    } catch (err) {
      handleError(err, 'ajout utilisateur');
    }
  };

  // Mettre à jour un utilisateur
  const updateUser = async () => {
    if (!editingUser.value || !editingUser.value.id) {
      alert('Aucun utilisateur sélectionné pour la modification');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/${editingUser.value.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingUser.value),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert('Utilisateur mis à jour avec succès!');
      
      // Rafraîchir la liste des utilisateurs
      await fetchUsers();
      
      // Fermer le formulaire d'édition
      editingUser.value = null;
      
    } catch (err) {
      handleError(err, 'mise à jour utilisateur');
    }
  };

  // Supprimer un utilisateur
  const deleteUser = async (userId) => {
    if (!userId) {
      alert('ID utilisateur invalide');
      return;
    }

    // Demander confirmation
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert('Utilisateur supprimé avec succès!');
      
      // Rafraîchir la liste des utilisateurs
      await fetchUsers();
      
    } catch (err) {
      handleError(err, 'suppression utilisateur');
    }
  };

  // Charger les données au montage du composant
  onMounted(() => {
    fetchUsers();
  });

  // Retourner les données et fonctions réactives
  return {
    // État
    users,
    newUser,
    editingUser,
    isLoading,
    error,
    
    // Actions
    fetchUsers,
    addUser,
    updateUser,
    deleteUser
  };
}