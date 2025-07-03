<script setup lang="ts">
import type { teachers } from '~/server/database/schema'

defineProps<{
  teacher: typeof teachers.$inferSelect
}>()
</script>

<template>
  <div class="h-50 w-50 border-gray-200 border-1 rounded-lg relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
    <img :src="teacher.avatar" :alt="teacher.name" class="relative h-auto object-cover">

    <div class="h-10 bg-white absolute rounded-b-lg bottom-0 left-0 right-0 flex items-center justify-center text-gray-500">
      {{ teacher.name }}
    </div>
  </div>
</template>
