<template>
  <div class="border border-black w-[300px] p-5 flex flex-col">
    <h2 class="text-xl font-semibold">Броня</h2>
    <!-- Контейнер для выравнивания по центру -->
    <div class="my-auto">
      <!-- Голова  -->
      <div class="border border-black w-24 h-20 mx-auto mb-5 text-center">
        <div class="mb-1">
          <h4 class="text-sm font-semibold">Голова</h4>
          <p class="text-xs">1-10</p>
        </div>
        <input
          type="text"
          class="bg-transparent max-w-20 outline-none text-center text-2xl"
          maxlength="2"
          :readonly="!props.editMode"
        />
      </div>
      <!-- Руки -->
      <div class="grid grid-cols-2 mb-5">
        <div class="border border-black w-24 h-20 mx-auto text-center">
          <div class="mb-1">
            <h4 class="text-sm font-semibold">Правая рука</h4>
            <p class="text-xs">11-20</p>
          </div>
          <input
            type="text"
            class="bg-transparent max-w-20 outline-none text-center text-2xl"
            maxlength="2"
            :readonly="!props.editMode"
          />
        </div>
        <div class="border border-black w-24 h-20 mx-auto text-center">
          <div class="mb-1">
            <h4 class="text-sm font-semibold">Левая рука</h4>
            <p class="text-xs">21-30</p>
          </div>
          <input
            type="text"
            class="bg-transparent max-w-20 outline-none text-center text-2xl"
            maxlength="2"
            :readonly="!props.editMode"
          />
        </div>
      </div>
      <!-- Торс -->
      <div class="border border-black w-24 h-20 mx-auto mb-5 text-center">
        <div class="mb-1">
          <h4 class="text-sm font-semibold">Торс</h4>
          <p class="text-xs">31-70</p>
        </div>
        <input
          type="text"
          class="bg-transparent max-w-20 outline-none text-center text-2xl"
          maxlength="2"
          :readonly="!props.editMode"
        />
      </div>
      <!-- Ноги -->
      <div class="grid grid-cols-2">
        <div class="border border-black w-24 h-20 mx-auto text-center">
          <div class="mb-1">
            <h4 class="text-sm font-semibold">Левая нога</h4>
            <p class="text-xs">71-85</p>
          </div>
          <input
            type="text"
            class="bg-transparent max-w-20 outline-none text-center text-2xl"
            maxlength="2"
            :readonly="!props.editMode"
          />
        </div>
        <div class="border border-black w-24 h-20 mx-auto text-center">
          <div class="mb-1">
            <h4 class="text-sm font-semibold">Правая нога</h4>
            <p class="text-xs">86-100</p>
          </div>
          <input
            type="text"
            class="bg-transparent max-w-20 outline-none text-center text-2xl"
            maxlength="2"
            :readonly="!props.editMode"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  editMode: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
