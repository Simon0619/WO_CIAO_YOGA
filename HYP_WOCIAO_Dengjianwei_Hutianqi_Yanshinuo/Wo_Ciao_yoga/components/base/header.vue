<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Teachers',
    icon: 'i-lucide-user',
    to: '/teachers',
  },
  {
    label: 'Activities',
    icon: 'i-lucide-calendar-days',
    to: '/events',
  },
  {
    label: 'Schedule',
    icon: 'i-lucide-calendar',
    to: '/schedule',
  },
  {
    label: 'About',
    icon: 'i-lucide-info',
    to: '/about',
  },
  {
    label: 'Contact',
    icon: 'i-lucide-mail',
    to: '/contact',
  },
])
</script>

<template>
  <header class="bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50">
    <div class="flex items-center justify-between h-full w-full px-4">
      <div class="flex items-center gap-2 cursor-pointer" @click="navigateTo('/')">
        <UIcon name="i-lucide:wind" class="size-6 text-green-500 flex-shrink-0" />
        <div class="text-2xl font-bold flex-shrink-0 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          WO CIAO Yoga
        </div>
      </div>
      <UNavigationMenu :items="items" class="w-full justify-center text-2xl font-bold" />
    </div>
  </header>
</template>
