import $axios from "../api.js";
import { BASE_URL } from "../env.js";
import characterService from "./characterService.js";
import { useCharacterStore } from "../stores/characterStore.js";

export default {
  async login(credentials) {
    try {
      const characterStore = useCharacterStore();
      const response = await $axios.post(`${BASE_URL}/users/login`, {
        username: credentials.username,
        password: credentials.password,
      });

      if (response.data.status === 200) {
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("uuid", response.data.user._id);
        characterStore.character = await characterService.getByUser(
          response.data.user._id
        );
        return response.data.user;
      } else {
        console.error(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  },
};
