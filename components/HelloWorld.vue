<!-- eslint-disable no-console -->
<script setup lang="ts">
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/15265627?s=400&u=d2d9280bdbc5b88bd3573702e5be258dc3c61c2a&v=4',
      // src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
  }], [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    },
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true,
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid',
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid',
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D'],
  }],
]

const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected = ref(people[0])

const isModalOpen = ref(false)
const isSlideoverOpen = ref(false)

const toast = useToast()
</script>

<template>
  <UContainer>

    <div class="sm:text-center">
      <UAvatar size="3xl"
        src="https://avatars.githubusercontent.com/u/15265627?s=400&u=d2d9280bdbc5b88bd3573702e5be258dc3c61c2a&v=4"
        alt="Harry Wong" chip-color="primary" chip-position="top-right" />
      <br>
      <ThemeSwitch />
      <UBadge size="lg">
        Fast
      </UBadge>
      <UBadge size="lg">
        Light
      </UBadge>
      <UBadge size="lg">
        Tailwind
      </UBadge>
      <UBadge size="lg">
        Nuxtlab-UI
      </UBadge>
      <br>
      <br>
      <UContainer>
        <UIcon name="i-heroicons-light-bulb" />
        <h1>A fast start Nuxt.js template</h1>
      </UContainer>
      <br>
      <UButtonGroup size="xl">
        <UButton label="Button" color="white" />
        <UButton icon="i-heroicons-chevron-down-20-solid" color="gray" />
        <UButton label="Groups" color="white" />
      </UButtonGroup>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Dropdown" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown>
      <br>
      <br>
      <UInput name="input1" loading icon="i-heroicons-magnifying-glass-20-solid" size="xl" color="primary"
        variant="outline" placeholder="Search..." />
      <UInput name="input2" icon="i-heroicons-magnifying-glass-20-solid" size="xl" color="primary" variant="outline"
        placeholder="Search..." />
      <br>
      <UTextarea name="textarea" color="primary" variant="outline" placeholder="Textarea" />
      <USelect name="select" size="sm" color="primary" variant="outline" placeholder="Select"
        :options="['United States', 'Canada', 'Mexico']" />

      <USelectMenu v-model="selected" :options="people" />
      <br>
      <UCheckbox label="Label" />
      <UCheckbox label="Label" help="Please check this box" />
      <UCheckbox label="Label" disabled />
      <br>
      <URadio label="Label" />
      <URadio label="Label" />
      <URadio label="Label" />
      <br>
      <!-- <UToggle /> -->
      <!-- <UToggle /> -->
      <!-- <UToggle /> -->
      <br>
      <!-- <UFormGroup label="Email" required>
                <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
            </UFormGroup> -->
      <br>
      <UButtonGroup>
        <UButton label="Open Modal" @click="isModalOpen = true" />
        <UButton color="red" label="Open Slideover" @click="isSlideoverOpen = true" />
        <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
      </UButtonGroup>
      <UModal v-model="isModalOpen">
        <UContainer>
          <h1>Hi, this is a modal</h1>
        </UContainer>
      </UModal>

      <USlideover v-model="isSlideoverOpen">
        <!-- Content -->
        <UContainer>
          <h1>Hi, this is a Slideover</h1>
        </UContainer>
      </USlideover>

      <UPopover>
        <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" />
        <template #panel>
          <!-- Content -->
          <h1>Hi, this is a Popover</h1>
        </template>
      </UPopover>
      <br>
      <br>
      <UTooltip text="Tooltip example" :shortcuts="['⌘', 'O']">
        <UButton color="gray" label="Hover me" />
      </UTooltip>
    </div>
  </UContainer>
</template>
