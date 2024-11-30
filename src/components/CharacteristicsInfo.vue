<template>
  <div class="grid grid-cols-9 gap-4">
    <!-- Характеристики -->
    <div
      v-for="(characteristic, index) in localCharacteristics"
      class="flex flex-col justify-center text-center"
    >
      <h4 class="text-xs mb-2">{{ characteristic.name }}</h4>
      <div
        class="mx-auto flex justify-center items-center border border-black w-12 h-12 text-lg mb-1"
      >
        <input
          type="text"
          v-model="characteristic.value"
          class="w-10 text-center outline-none border-none text-2xl"
          maxlength="2"
          :readonly="!props.editMode"
        />
      </div>
      <!-- Advancements -->
      <div class="mx-auto flex items-center">
        <div
          v-for="i in 4"
          :key="i"
          class="rounded-full w-3 h-3 border border-gray-400"
          :class="{
            'bg-gray-800': characteristic.advancements[i - 1],
            'cursor-pointer': props.editMode,
            'cursor-default': !props.editMode,
          }"
          @click="toggleAdvancementLevel(characteristic, i - 1)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useCharacterStore } from "../stores/characterStore";

const characterStore = useCharacterStore();

const localCharacteristics = ref({
  weaponSkill: {
    name: "Ближний бой",
    value: 0,
    advancements: [false, false, false, false],
  },
  ballisticSkill: {
    name: "Дальний бой",
    value: 0,
    advancements: [false, false, false, false],
  },
  strength: {
    name: "Сила",
    value: 0,
    advancements: [false, false, false, false],
  },
  toughness: {
    name: "Выносливость",
    value: 0,
    advancements: [false, false, false, false],
  },
  agility: {
    name: "Ловкость",
    value: 0,
    advancements: [false, false, false, false],
  },
  intelligence: {
    name: "Интеллект",
    value: 0,
    advancements: [false, false, false, false],
  },
  perception: {
    name: "Восприятие",
    value: 0,
    advancements: [false, false, false, false],
  },
  willPower: {
    name: "Сила Воли",
    value: 0,
    advancements: [false, false, false, false],
  },
  fellowship: {
    name: "Товарищество",
    value: 0,
    advancements: [false, false, false, false],
  },
});

const props = defineProps({
  editMode: {
    type: Boolean,
    default: false,
  },
});

const toggleAdvancementLevel = (characteristic, advancement) => {
  if (!props.editMode) {
    return;
  }
  if (characteristic.advancements[advancement]) {
    for (let i = advancement; i < characteristic.advancements.length; i++) {
      characteristic.advancements[i] = false;
    }
  } else {
    for (let i = 0; i <= advancement; i++) {
      characteristic.advancements[i] = true;
    }
  }
};

onMounted(() => {
  localCharacteristics.value = characterStore.character.characteristics;
});

watch(
  () => props.editMode,
  (newValue, oldValue) => {
    if (oldValue === true && newValue === false) {
      characterStore.character.characteristics = localCharacteristics.value;
      characterStore.calculateMovement();
    }
  }
);
</script>

<style lang="scss" scoped></style>
