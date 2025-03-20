import { ref, onMounted } from "vue";
import axios from "axios";

export function useUserManager() {
  const users = ref([]);
  const newUser = ref({ first_name: "", last_name: "", email: "", password: "", role: "user" });
  const editingUser = ref(null);
  const isLoading = ref(false);

  // Charger les utilisateurs
  const fetchUsers = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get("/api/users");
      users.value = response.data;
    } catch (error) {
      console.error("Erreur de récupération des utilisateurs:", error);
    } finally {
      isLoading.value = false;
    }
  };

  // Ajouter un utilisateur
  const addUser = async () => {
    try {
      await axios.post("/api/users/add", newUser.value);
      fetchUsers();
      newUser.value = { first_name: "", last_name: "", email: "", password: "", role: "user" };
    } catch (error) {
      console.error("Erreur d'ajout de l'utilisateur:", error);
    }
  };

  // Modifier un utilisateur
  const updateUser = async () => {
    if (!editingUser.value) return;
    try {
      await axios.put(`/api/users/${editingUser.value.id}`, editingUser.value);
      editingUser.value = null;
      fetchUsers();
    } catch (error) {
      console.error("Erreur de mise à jour de l'utilisateur:", error);
    }
  };

  // Supprimer un utilisateur
  const deleteUser = async (id) => {
    if (!confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) return;
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Erreur de suppression de l'utilisateur:", error);
    }
  };

  onMounted(fetchUsers);

  return { users, newUser, editingUser, isLoading, fetchUsers, addUser, updateUser, deleteUser };
}
