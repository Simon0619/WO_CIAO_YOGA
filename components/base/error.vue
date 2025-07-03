<script setup lang="ts">
defineProps<{
  error: Error
}>()
</script>

<template>
  <UContainer>
    <UCard class="m-4 text-red-500">
      {{ error }}
    </UCard>
  </UContainer>
</template>
