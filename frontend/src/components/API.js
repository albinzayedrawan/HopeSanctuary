import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pets:", error);
    throw error;
  }
};

export const fetchUser = async (userId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const submitAdoptionForm = async (formData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/adoption-forms`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting adoption form:", error);
    throw error;
  }
};

export const fetchUserRequestsByToken = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/adoption-forms/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user requests:", error);
    throw error;
  }
};

export const fetchAdoptionRequests = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/adoption-forms`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching adoption requests:", error);
    throw error;
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pet details:", error);
    throw error;
  }
};
export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact-forms`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};


export const createPet = async (petData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pets`, petData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating pet:", error);
    throw error;
  }
};

export const deletePet = async (petId, token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/pets/${petId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting pet:", error);
    throw error;
  }
};

export const updatePet = async (id, petData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/pets/${id}`, petData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating pet:", error);
    throw error;
  }
};

export const updateRequestStatus = async (requestId, status, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/adoption-forms/${requestId}`, { status }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating request status:", error);
    throw error;
  }
};