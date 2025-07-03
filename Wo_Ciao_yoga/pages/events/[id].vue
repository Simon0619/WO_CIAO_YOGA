<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'
import type { teachers } from '~/server/database/schema'

const route = useRoute()

const { data, error } = useFetch('/api/event', {
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
    label: 'Activities',
    icon: 'i-lucide-calendar',
    to: '/events',
  },
  {
    label: data?.value?.event.name,
  },
])
</script>

<template>
  <div v-if="error">
    <base-error :error="error" />
  </div>
  <div v-else>
    <UBreadcrumb :items="items" class="m-4" />

    <div class="flex flex-col items-center w-full p-4">
      <img :src="data?.event.cover2 ?? data?.event.cover" :alt="data?.event.name"
           class="w-230 h-auto object-cover rounded-lg">

      <div class="text-2xl font-bold mt-5">
        「{{ data?.event.name }}」
      </div>

      <div class="flex flex-col gap-4 my-4 w-full max-w-4xl">
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-map-pin" class="w-4 h-4" />

          <div class="text-sm text-gray-500">
            {{ data?.teachers?.[0]?.address }}
          </div>
        </div>

        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-calendar" class="w-4 h-4" />

          <div class="text-sm text-gray-500">
            {{ formatDate(data?.event.startAt!) }} ~ {{ formatDate(data?.event.endAt!) }}
          </div>
        </div>

        <div class="mt-4">
          <h3 class="text-lg font-semibold mb-4">
            Teachers
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <template v-if="data?.teachers">
              <teacher-card
                v-for="teacher in data.teachers.filter((t): t is typeof teachers.$inferSelect => t !== null)"
                :key="teacher.id" :teacher="teacher" @click="navigateTo(`/teachers/${teacher.id}`)" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
