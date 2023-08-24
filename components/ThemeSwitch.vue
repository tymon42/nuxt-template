<script setup lang="ts">
type Theme = 'light' | 'dark' | 'system'
const colorTheme: Ref<Theme> = ref('system')

function setColorTheme() {
  if (colorTheme.value === 'system')
    colorTheme.value = 'light'
  else if (colorTheme.value === 'light')
    colorTheme.value = 'dark'
  else if (colorTheme.value === 'dark')
    colorTheme.value = 'system'

  useColorMode().preference = colorTheme.value
}
</script>

<template>
  <UButton v-if="colorTheme === 'dark'" color="gray" icon="i-heroicons-moon" variant="ghost" @click="setColorTheme()" />
  <UButton v-if="colorTheme === 'light'" color="gray" icon="i-heroicons-sun" variant="ghost" @click="setColorTheme()" />
  <UButton v-if="colorTheme === 'system'" color="gray" icon="i-heroicons-computer-desktop" variant="ghost" @click="setColorTheme()" />
</template>

<style>
body {
  background-color: #fafafa;
  color: #000000;
}
.dark body {
  background-color: #000000;
  color: #fafafa;
}
</style>
