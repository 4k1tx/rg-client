<template>
  <div class="grid grid-cols-6 gap-4">
    <!-- Половинчатая скорость -->
    <div class="flex flex-col justify-center text-center">
      <h4 class="text-xs mb-2">Пол. скорость</h4>
      <div
        class="mx-auto flex justify-center items-center border border-black w-24 h-16"
      >
        <div class="text-2xl">
          {{ characterStore.character.movement.halfMove
          }}<span class="text-xs">м</span>
        </div>
      </div>
    </div>
    <!-- Полная скорость -->
    <div class="flex flex-col justify-center text-center">
      <h4 class="text-xs mb-2">Полная скорость</h4>
      <div
        class="mx-auto flex justify-center items-center border border-black w-24 h-16"
      >
        <div class="text-2xl">
          {{ characterStore.character.movement.fullMove
          }}<span class="text-xs">м</span>
        </div>
      </div>
    </div>
    <!-- Натиск -->
    <div class="flex flex-col justify-center text-center">
      <h4 class="text-xs mb-2">Натиск</h4>
      <div
        class="mx-auto flex justify-center items-center border border-black w-24 h-16"
      >
        <div class="text-2xl">
          {{ characterStore.character.movement.charge
          }}<span class="text-xs">м</span>
        </div>
      </div>
    </div>
    <!-- Бег-->
    <div class="flex flex-col justify-center text-center">
      <h4 class="text-xs mb-2">Бег</h4>
      <div
        class="mx-auto flex justify-center items-center border border-black w-24 h-16"
      >
        <div class="text-2xl">
          {{ characterStore.character.movement.run
          }}<span class="text-xs">м</span>
        </div>
      </div>
    </div>
    <!-- Прыжок в длину -->
    <div class="flex flex-col justify-center text-center">
      <h4 class="text-xs mb-2">Прыжок в длину</h4>
      <div
        class="mx-auto flex justify-center items-center border border-black w-24 h-16"
      >
        <div class="text-2xl">
          {{ characterStore.character.movement.baseLeap
          }}<span class="text-xs">м</span>
        </div>
      </div>
    </div>
    <!-- Прыжок в высоту -->
    <div class="flex flex-col justify-center text-center">
      <h4 class="text-xs mb-2">Прыжок в высоту</h4>
      <div
        class="mx-auto flex justify-center items-center border border-black w-24 h-16"
      >
        <div class="text-2xl">
          {{ characterStore.character.movement.baseJump
          }}<span class="text-xs">см</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCharacterStore } from "../stores/characterStore";

const characterStore = useCharacterStore();
</script>

<style lang="scss" scoped></style>
