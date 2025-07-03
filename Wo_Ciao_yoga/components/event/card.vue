<script setup lang="ts">
import type { EventWithTeacher } from '~/server/types/event'

defineProps<{
  event: EventWithTeacher
}>()
</script>

<template>
  <div
    class="h-75 w-75 border-gray-200 border-1 rounded-lg relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
    <img :src="event.cover" :alt="event.name" class="relative h-auto object-cover">

    <div
      class="h-20 bg-white absolute text-sm flex flex-col justify-between rounded-b-lg bottom-0 left-0 right-0 p-2 text-gray-500">
      <div class="flex gap-2 items-center">
        <UIcon name="i-lucide-info" class="w-4 h-4 flex-shrink-0" />
        <span class="line-clamp-1">
          {{ event.name }}
        </span>
      </div>

      <div class="flex gap-2 items-center">
        <UIcon name="i-lucide-user" class="w-4 h-4 flex-shrink-0" />
        <span class="line-clamp-3">
          {{ event.teachers.map(t => t.name).join(', ') }}
        </span>
      </div>

      <div class="flex gap-2 items-center">
        <UIcon name="i-lucide-calendar" class="w-4 h-4 flex-shrink-0" />
        <span class="line-clamp-3">
          {{ formatDate(event.startAt) }} ~ {{ formatDate(event.endAt) }}
        </span>
      </div>
    </div>
  </div>
</template>
