<template>
  <div class="grid grid-cols-2">
    <!-- Column 1 -->
    <div id="column__1" class="space-y-2 mx-auto">
      <!-- Имя персонажа -->
      <div class="flex">
        <label
          for="name__input"
          class="font-semibold border-b border-black w-32"
          >Имя персонажа</label
        >
        <input
          id="name__input"
          type="text"
          :readonly="!props.editMode"
          v-model="localGeneralInfo.characterName"
          class="border-b border-black outline-none bg-transparent"
        />
      </div>
      <!-- Род занятий -->
      <div class="flex">
        <label
          for="name__input"
          class="font-semibold border-b border-black w-32"
          >Род занятий</label
        >
        <input
          id="name__input"
          type="text"
          class="border-b border-black outline-none bg-transparent"
          :readonly="!props.editMode"
          v-model="localGeneralInfo.careerPath"
        />
      </div>
      <!-- Очки опыта -->
      <div class="flex">
        <label
          for="name__input"
          class="font-semibold border-b border-black w-32"
          >Очки опыта</label
        >
        <input
          id="name__input"
          type="number"
          class="border-b border-black outline-none bg-transparent"
          :readonly="!props.editMode"
          v-model="localGeneralInfo.experiencePoints"
        />
      </div>
    </div>
    <!-- Column 2 -->
    <div id="column__2" class="space-y-2 mx-auto">
      <!-- Имя игрока -->
      <div class="flex items-center">
        <label
          for="name__input"
          class="font-semibold border-b border-black w-32"
          >Имя игрока</label
        >
        <input
          id="name__input"
          type="text"
          class="border-b border-black outline-none bg-transparent"
          :readonly="!props.editMode"
          v-model="localGeneralInfo.playerName"
        />
      </div>
      <!-- Родной мир -->
      <div class="flex items-center">
        <label
          for="name__input"
          class="font-semibold border-b border-black w-32"
          >Родной мир</label
        >
        <input
          id="name__input"
          type="text"
          class="border-b border-black outline-none bg-transparent"
          :readonly="!props.editMode"
          v-model="localGeneralInfo.homeWorld"
        />
      </div>
      <!-- Устремление -->
      <div class="flex items-center">
        <label
          for="name__input"
          class="font-semibold border-b border-black w-32"
          >Устремление</label
        >
        <input
          id="name__input"
          type="text"
          class="border-b border-black outline-none bg-transparent"
          :readonly="!props.editMode"
          v-model="localGeneralInfo.motivation"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useCharacterStore } from "../stores/characterStore";

const characterStore = useCharacterStore();

const localGeneralInfo = computed(() => characterStore.character.generalInfo);

const props = defineProps({
  editMode: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.editMode,
  (newValue, oldValue) => {
    if (oldValue === true && newValue === false) {
      characterStore.character.generalInfo = localGeneralInfo.value;
    }
  }
);
</script>

<style lang="scss" scoped></style>
