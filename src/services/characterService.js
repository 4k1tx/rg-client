import $axios from "../api.js";
import { BASE_URL } from "../env.js";

export default {
  async getByUser(userId) {
    try {
      const response = await $axios.get(`${BASE_URL}/characters/${userId}`);
      if (response.data.status === 200) {
        return response.data.character;
      } else {
        console.error(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  },

  async update(userId, character) {
    try {
      const response = await $axios.patch(
        `${BASE_URL}/characters/${userId}/update`,
        character
      );
      if (response.data.status === 200) {
        return response.data.character;
      } else {
        console.error(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  },
};
