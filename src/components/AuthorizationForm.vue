<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form
      action="#"
      @submit.prevent="submit(credentials)"
      class="space-y-4 md:space-y-6 text-center"
    >
      <!-- Username -->
      <div>
        <label for="username" class="font-semibold mr-3">Username</label>
        <input
          id="username"
          v-model="credentials.username"
          type="text"
          class="border-b border-black bg-transparent outline-none"
        />
      </div>
      <!-- Password -->
      <div>
        <label for="password" class="font-semibold mr-3">Password</label>
        <input
          v-model="credentials.password"
          id="password"
          type="password"
          class="border-b border-black bg-transparent outline-none"
        />
      </div>
      <button
        class="border bg-black font-semibold text-white text-xl p-1.5 w-32 hover:bg-gray-800 ease-in-out transition-all"
        type="submit"
        :disabled="loading"
      >
        <VButtonLoader v-if="loading"></VButtonLoader>
        <span v-else>Login</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useUserStore } from "../stores/userStore";
import VButtonLoader from "../components/VButtonLoader.vue";

const userStore = useUserStore();
const credentials = reactive({
  username: "",
  password: "",
});
const loading = ref(false);

const submit = async (credentials) => {
  if (!credentials.username.trim()) {
    return;
  } else if (!credentials.password.trim()) {
    return;
  } else {
    loading.value = true;
    try {
      await userStore.login(credentials);
    } catch (error) {
      console.log(error);
      loading.value = false;
    }
    loading.value = false;
  }
};
</script>

<style scoped></style>
