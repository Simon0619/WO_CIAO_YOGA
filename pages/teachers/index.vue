<script setup lang="ts">
const { data, error } = useFetch('/api/teachers', {
  default: () => ({ results: [] }),
})
</script>

<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl text-green-600 font-bold">
      Teachers
    </h1>

    <USeparator class="my-4" />
    <base-error v-if="error" :error="error" />
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <teacher-card v-for="teacher in data.results" :key="teacher.id" :teacher="teacher" @click="navigateTo(`/teachers/${teacher.id}`)" />
    </div>
  </div>
</template>
