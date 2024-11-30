<template>
  <aside
    class="fixed top-0 left-0 z-40 w-[150px] h-screen border-r border-r-border flex flex-col bg-black"
  >
    <!-- Navigation Section -->
    <nav class="my-[100px] flex flex-col">
      <ul class="space-y-2">
        <!-- Beneficiaries -->

        <li
          class="flex text-center font-semibold text-white hover:bg-white hover:text-black transition-all ease-in-out duration-100 cursor-pointer"
        >
          <router-link :to="`/characters/${uuid}/general`" class="w-full p-2">
            Общее
          </router-link>
        </li>

        <li
          class="flex text-center font-semibold text-white hover:bg-white hover:text-black transition-all ease-in-out duration-100 cursor-pointer"
        >
          <router-link :to="`/characters/${uuid}/combat`" class="w-full p-2">
            Бой
          </router-link>
        </li>
        <li
          class="flex justify-center p-2 text-white hover:bg-white hover:text-black transition-all ease-in-out duration-100 cursor-pointer font-semibold"
        >
          Снаряжение
        </li>
        <li
          class="flex justify-center p-2 text-white hover:bg-white hover:text-black transition-all ease-in-out duration-100 cursor-pointer font-semibold"
        >
          Особенности
        </li>
        <li
          class="flex justify-center p-2 text-white hover:bg-white hover:text-black transition-all ease-in-out duration-100 cursor-pointer font-semibold"
        >
          Псионика
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const uuid = sessionStorage.getItem("uuid");
</script>

<style scoped>
.router-link-active {
  color: black;
  background: white;
}
</style>
