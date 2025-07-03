<template>
  <div>
    <base-header />
    <main class="min-h-[calc(100vh-var(--ui-header-height))]">
      <slot />
    </main>
    <base-footer />
  </div>
</template>
