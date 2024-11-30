<template>
  <SidebarMenu />
  <main class="ml-[150px] max-w-max p-5 relative mx-auto">
    <button
      class="absolute top-3 right-0 border p-1 rounded-lg"
      @click="updateCharacter()"
    >
      <CheckIcon class="size-5" v-if="editMode" />
      <PencilSquareIcon class="size-5" v-else />
    </button>
    <GeneralInfo class="mb-8" :edit-mode="editMode" />
    <CharacteristicsInfo :edit-mode="editMode" class="mb-5" />
    <MovementInfo class="mb-8" :edit-mode="editMode" />
    <SkillsList :edit-mode="editMode" />
  </main>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import SkillsList from "../components/SkillsList.vue";
import GeneralInfo from "../components/GeneralInfo.vue";
import CharacteristicsInfo from "../components/CharacteristicsInfo.vue";
import MovementInfo from "../components/MovementInfo.vue";
import { PencilSquareIcon, CheckIcon } from "@heroicons/vue/24/outline";
import characterService from "../services/characterService.js";
import { useCharacterStore } from "../stores/characterStore.js";
const characterStore = useCharacterStore();

const editMode = ref(false);

const updateCharacter = async () => {
  editMode.value = !editMode.value;

  if (!editMode.value) {
    await characterService.update(
      sessionStorage.getItem("uuid"),
      characterStore.character
    );
  }
};
</script>

<style lang="scss" scoped></style>
