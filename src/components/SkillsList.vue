<template>
  <!-- Контейнер для двух колонок навыков -->
  <div class="grid grid-cols-2">
    <!-- Колонка 1 -->
    <div class="space-y-1 mr-auto">
      <h2 class="text-xl font-bold mb-4">Базовые умения</h2>
      <div
        v-for="(skill, index) in basicSkills"
        :key="index"
        class="flex items-center"
      >
        <div class="w-48 text-sm">
          {{ skill.name }}
          <span class="text-gray-500 text-xs"
            >({{ skill.characteristic.toUpperCase() }})</span
          >
        </div>
        <!-- Ячейки для отметки -->
        <div class="flex gap-2 items-center">
          <div
            v-for="i in 4"
            :key="i"
            class="w-4 h-4 border border-gray-400 cursor-pointer"
            :class="{ 'bg-gray-800': skill.levels[i - 1] }"
            @click="toggleSkillLevel(skill, i - 1)"
          ></div>
          <!-- Input для ввода бонуса -->
          <div class="w-8 h-6 border border-gray-400">
            <input
              type="text"
              class="bg-transparent text-center outline-none border-none w-7"
              maxlength="2"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Колонка 2 -->
    <div class="space-y-1 ml-auto">
      <h2 class="text-xl font-bold mb-4">Продвинутые умения</h2>
      <div
        v-for="(skill, index) in advancedSkills"
        :key="index"
        class="flex items-center"
      >
        <div class="w-48 text-sm">
          {{ skill.name }}
          <span class="text-gray-500 text-xs"
            >({{ skill.characteristic.toUpperCase() }})</span
          >
        </div>
        <!-- Ячейки для отметки -->
        <div class="flex gap-2 items-center">
          <div
            v-for="i in 4"
            :key="i"
            class="w-4 h-4 border border-gray-400 cursor-pointer"
            :class="{ 'bg-gray-800': skill.levels[i - 1] }"
            @click="toggleSkillLevel(skill, i - 1)"
          ></div>
          <!-- Input для ввода бонуса -->
          <div class="w-8 h-6 border border-gray-400">
            <input
              type="text"
              class="bg-transparent text-center outline-none border-none w-7"
              maxlength="2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useCharacterStore } from "../stores/characterStore";
const characterStore = useCharacterStore();

const props = defineProps({
  editMode: {
    type: Boolean,
    default: false,
  },
});

const basicSkills = computed(() => {
  return characterStore.character.skills.filter((skill) => {
    return skill.type === "basic";
  });
});

const advancedSkills = computed(() => {
  return characterStore.character.skills.filter((skill) => {
    return skill.type === "advanced";
  });
});

const toggleSkillLevel = (skill, level) => {
  if (!props.editMode) {
    return;
  }
  if (skill.levels[level]) {
    for (let i = level; i < skill.levels.length; i++) {
      skill.levels[i] = false;
    }
  } else {
    for (let i = 0; i <= level; i++) {
      skill.levels[i] = true;
    }
  }
};

watch(
  () => props.editMode,
  (newValue, oldValue) => {
    if (oldValue === true && newValue === false) {
      characterStore.character.skills = [
        ...basicSkills.value,
        ...advancedSkills.value,
      ];
    }
  }
);
</script>

<style lang="scss" scoped></style>
