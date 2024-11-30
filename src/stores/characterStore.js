import { defineStore } from "pinia";
import { ref } from "vue";

export const useCharacterStore = defineStore(
  "character",
  () => {
    const character = ref({});

    const calculateMovement = () => {
      character.value.movement.halfMove = parseInt(
        character.value.characteristics.agility.value.toString()[0]
      );
      character.value.movement.fullMove =
        parseInt(character.value.characteristics.agility.value.toString()[0]) *
        2;
      character.value.movement.charge =
        parseInt(character.value.characteristics.agility.value.toString()[0]) *
        3;
      character.value.movement.run =
        parseInt(character.value.characteristics.agility.value.toString()[0]) *
        6;
      character.value.movement.baseLeap = parseInt(
        character.value.characteristics.strength.value.toString()[0]
      );
      character.value.movement.baseJump =
        parseInt(character.value.characteristics.strength.value.toString()[0]) *
        20;
    };

    return {
      character,
      calculateMovement,
    };
  },
  { persist: true }
);
