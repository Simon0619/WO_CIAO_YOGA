<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()

const { data: teacher } = await useFetch('/api/teacher', {
  query: {
    id: route.params.id,
  },
})

const items = computed<BreadcrumbItem[]>(() => [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Teachers',
    icon: 'i-lucide-user',
    to: '/teachers',
  },
  {
    label: teacher!.value?.name,
  },
])
</script>

<template>
  <div>
    <UBreadcrumb :items="items" class="m-4" />

    <div class="flex flex-col items-center p-4 max-w-4xl mx-auto mt-4">
      <img :src="teacher!.avatar" :alt="teacher!.name" class="w-40 h-auto object-cover rounded-lg">

      <div class="text-2xl font-bold mt-2">
        {{ teacher!.name }}
      </div>

      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-map-pin" class="w-4 h-4" />

        <div class="text-sm text-gray-500">
          {{ teacher!.address }}
        </div>
      </div>

      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-calendar" class="w-4 h-4" />

        <div class="text-sm text-gray-500">
          Joined at {{ formatDate(teacher!.joinedAt) }}
        </div>
      </div>
      <div class="text-[16px] text-gray-500 mt-2" v-html="teacher!.description?.replace(/\n/g, '<br />')" />
    </div>
  </div>
</template>
