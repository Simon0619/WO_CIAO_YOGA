<script setup lang="ts">
const { data, error } = useFetch('/api/events?isRecommended=0', {
  default: () => ({ results: [] }),
})
</script>

<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl text-green-600 font-bold">
      Activities
    </h1>

    <USeparator class="my-4" />
    <base-error v-if="error" :error="error" />
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <event-card v-for="event in data.results" :key="event.id" :event="event" @click="navigateTo(`/events/${event.id}`)" />
    </div>
  </div>
</template>
