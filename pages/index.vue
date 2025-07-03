<script setup lang="ts">
import type { teachers } from '~/server/database/schema'
import type { EventWithTeacher } from '~/server/types/event'

type Teacher = typeof teachers.$inferSelect

const items = [
  'https://www.pure-yoga.cn/images/slider/banner_%E6%A8%AA_%E8%8B%B1.png',
  'https://www.pure-yoga.cn/images/slider/Web-Banner-EN2.jpg',
]

const { data } = useFetch('/api/teachers', {
  default: () => ({ results: [] }),
})

const { data: events } = useFetch('/api/events?isRecommended=1', {
  default: () => ({ results: [] }),
})
</script>

<template>
  <div>
    <UCarousel v-slot="{ item }" :items="items" class="w-full mx-auto" dots>
      <img :src="item" class="rounded-lg h-[500px] w-full object-cover">
    </UCarousel>

    <USeparator class="mt-10">
      <div class="bg-gray-100 px-4 py-2 rounded-full">
        Teachers
      </div>
    </USeparator>

    <UCarousel v-slot="{ item }" :items="((data.results as Teacher[]))"
               :ui="{ item: 'sm:basis-1/2 lg:basis-1/4 xl:basis-1/6 basis-1/3' }" auto-scroll loop class="m-4">
      <teacher-card :teacher="item" @click="navigateTo(`/teachers/${item.id}`)" />
    </UCarousel>

    <USeparator>
      <div class="bg-gray-100 px-4 py-2 rounded-full">
        Highly Recommended
      </div>
    </USeparator>

    <UCarousel v-slot="{ item }" :items="(events.results as EventWithTeacher[])"
               :ui="{ item: 'basis-1/2 sm:basis-1/3 lg:basis-1/4' }" auto-scroll loop class="m-4">
      <event-card :event="item" @click="navigateTo(`/events/${item.id}`)" />
    </UCarousel>
  </div>
</template>
