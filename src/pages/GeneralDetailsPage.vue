<template>
  <SidebarMenu />
  <main class="ml-[150px] max-w-max p-5 relative mx-auto">
    <!-- Update button -->
    <button
      class="absolute top-3 right-0 border p-1 rounded-lg"
      @click="updateCharacter()"
    >
      <CheckIcon class="size-5" v-if="editMode" />
      <PencilSquareIcon class="size-5" v-else />
    </button>
    <!-- Cancel Button -->
    <button
      v-if="editMode"
      class="absolute top-3 right-0 mr-8 border p-1 rounded-lg"
      @click="discardChanges()"
    >
      <XMarkIcon class="size-5" />
    </button>

    <GeneralInfo class="mb-8" :edit-mode="editMode" />
    <CharacteristicsInfo :edit-mode="editMode" class="mb-5" />
    <SkillsList :edit-mode="editMode" />
  </main>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import SkillsList from "../components/SkillsList.vue";
import GeneralInfo from "../components/GeneralInfo.vue";
import CharacteristicsInfo from "../components/CharacteristicsInfo.vue";

import {
  PencilSquareIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import characterService from "../services/characterService.js";
import { useCharacterStore } from "../stores/characterStore.js";
const characterStore = useCharacterStore();

const editMode = ref(false);

const handleEditMode = () => {
  editMode.value = !editMode.value;
};

const updateCharacter = async () => {
  handleEditMode();

  if (!editMode.value) {
    await characterService.update(
      sessionStorage.getItem("uuid"),
      characterStore.character
    );
  }
};

const discardChanges = async () => {
  handleEditMode();

  if (!editMode.value) {
    characterStore.character = await characterService.getByUser(
      sessionStorage.getItem("uuid")
    );
  }
};
</script>

<style lang="scss" scoped></style>
