<script setup lang="ts">
import { themeChange } from 'theme-change';

const colorMode = useColorMode()
const themes = [
  {
    icon: 'i-heroicons-computer-desktop',
    theme: 'system',
  }, {
    icon: 'i-heroicons-sun',
    theme: 'light',
  }, {
    icon: 'i-heroicons-moon',
    theme: 'dark',
  },
]

const currentThemeIcon = computed(() => {
  return themes.find((item) => item.theme === colorMode.preference)?.icon
})

function setTheme(name: string) {
  colorMode.preference = name
}

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <div class="dropdown dropdown-end">
    <button tabindex="0" class="btn btn-sm btn-ghost">
      <UIcon class="w-6 h-6" :name="currentThemeIcon" dynamic />
    </button>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box min-w-max space-y-1">
      <li v-for="item of themes" :key="item.theme">
        <button class="btn btn-sm min-w-max" @click="setTheme(item.theme)">
          <UIcon class="w-6 h-6" :name="item.icon" />
          <!-- {{ item.icon }} {{ item.theme }} -->
        </button>
      </li>
    </ul>
  </div>
</template>
