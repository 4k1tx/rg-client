import { defineStore } from "pinia";
import { ref } from "vue";
import userService from "../services/userService.js";
import router from "../router.js";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref({});

    const login = async (credentials) => {
      user.value = await userService.login(credentials);
      router.push({
        name: "GeneralDetails",
        params: { uuid: sessionStorage.getItem("uuid") },
      });
    };

    const logout = async () => {
      sessionStorage.clear();
      localStorage.clear();
      user.value = {};
      router.push({ path: "/authorization" });
    };

    return {
      user,
      login,
      logout,
    };
  },
  { persist: true }
);
