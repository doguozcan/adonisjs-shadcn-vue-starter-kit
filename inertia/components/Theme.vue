<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()
</script>

<template>
  <Button v-if="colorMode === 'light'" variant="outline" size="icon" @click="colorMode = 'dark'">
    <Sun />
  </Button>
  <Button v-if="colorMode === 'dark'" variant="outline" size="icon" @click="colorMode = 'light'">
    <Moon />
  </Button>
</template>
