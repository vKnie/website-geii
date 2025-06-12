// api/config.js
export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000/api',
  TIMEOUT: 10000, // 10 secondes
  
  // En-têtes par défaut
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

// Fonction utilitaire pour faire des requêtes HTTP
export class ApiClient {
  constructor(baseUrl = API_CONFIG.BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config = {
      headers: {
        ...API_CONFIG.DEFAULT_HEADERS,
        ...options.headers
      },
      timeout: API_CONFIG.TIMEOUT,
      ...options
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      // Si pas de contenu (ex: DELETE), retourner un objet vide
      if (response.status === 204) {
        return {};
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Timeout: La requête a pris trop de temps');
      }
      throw error;
    }
  }

  // Méthodes HTTP spécifiques
  async get(endpoint, options = {}) {
    return this.request(endpoint, { method: 'GET', ...options });
  }

  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    });
  }

  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options
    });
  }

  async delete(endpoint, options = {}) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  }
}

// Instance par défaut
export const apiClient = new ApiClient();

// Fonctions utilitaires pour la gestion d'erreurs
export const handleApiError = (error, context = '') => {
  console.error(`Erreur API ${context}:`, error);
  
  let message = 'Une erreur est survenue';
  
  if (error.message.includes('Failed to fetch')) {
    message = 'Impossible de se connecter au serveur. Vérifiez que le backend est démarré.';
  } else if (error.message.includes('Timeout')) {
    message = 'La requête a pris trop de temps. Veuillez réessayer.';
  } else if (error.message) {
    message = error.message;
  }
  
  return message;
};