import { ref, onMounted } from "vue";
import axios from "axios";

export function useFormationsManager() {
  const formations = ref([]);
  const newFormation = ref({
    name: "",
    description: "",
    curriculum: "",
    objectives: "",
    admission_requirements: "",
    career_outcomes: "",
    skills_acquired: "",
    duration_and_structure: "",
    further_studies: "",
    contact_info: ""
  });
  const editingFormation = ref(null);
  const isLoading = ref(false);

  // Charger les formations
  const fetchFormations = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get("/api/formations");
      formations.value = response.data;
    } catch (error) {
      console.error("Erreur de récupération des formations:", error);
    } finally {
      isLoading.value = false;
    }
  };

  // Ajouter une formation
  const addFormation = async () => {
    try {
      await axios.post("/api/formations/add", newFormation.value);
      fetchFormations();
      newFormation.value = {
        name: "",
        description: "",
        curriculum: "",
        objectives: "",
        admission_requirements: "",
        career_outcomes: "",
        skills_acquired: "",
        duration_and_structure: "",
        further_studies: "",
        contact_info: ""
      };
    } catch (error) {
      console.error("Erreur d'ajout de la formation:", error);
    }
  };

  // Modifier une formation
  const updateFormation = async () => {
    if (!editingFormation.value) return;
    try {
      await axios.put(`/api/formations/${editingFormation.value.id}`, editingFormation.value);
      editingFormation.value = null;
      fetchFormations();
    } catch (error) {
      console.error("Erreur de mise à jour de la formation:", error);
    }
  };

  // Supprimer une formation
  const deleteFormation = async (id) => {
    if (!confirm("Voulez-vous vraiment supprimer cette formation ?")) return;
    try {
      await axios.delete(`/api/formations/${id}`);
      fetchFormations();
    } catch (error) {
      console.error("Erreur de suppression de la formation:", error);
    }
  };

  onMounted(fetchFormations);

  return { formations, newFormation, editingFormation, isLoading, fetchFormations, addFormation, updateFormation, deleteFormation };
}
