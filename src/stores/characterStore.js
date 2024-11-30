import { defineStore } from "pinia";
import { ref } from "vue";

export const useCharacterStore = defineStore(
  "character",
  () => {
    const character = ref({});

    return {
      character,
    };
  },
  { persist: true }
);
