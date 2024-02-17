<script setup lang="ts">
import { Toaster } from 'vue-sonner'

const colorMode = useColorMode()

const themeString = computed(() => {
  if (colorMode.preference === 'system')
    return 'light'

  return colorMode.preference === 'dark' ? 'dark' : 'light'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications class="z-50" />
    <ClientOnly>
      <Toaster class="z-50" position="top-left" :theme="themeString" rich-colors close-button :visible-toasts="5" />
    </ClientOnly>
  </NuxtLayout>
</template>

<style>
body {
  background-color: #fff;
  color: #000;
}
.dark-mode body {
  background-color: #000;
  color: #fff;
}
</style>
