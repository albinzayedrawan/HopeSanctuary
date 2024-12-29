import axios from "axios";

const API_BASE_URL = "http://34.234.116.129:5000/api";

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

// Add other API functions similarly...