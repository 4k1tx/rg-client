<template>
  <div class="loader mx-auto"></div>
</template>

<script setup></script>

<style scoped>
.loader {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-top-color: transparent;
  animation: rot1 1.2s linear infinite;
}

@keyframes rot1 {
  to {
    transform: rotate(360deg);
  }
}
</style>
