<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { ArrowLeft, FileQuestionMark } from '@lucide/vue'
</script>

<template>
  <div class="flex flex-col min-h-screen justify-center items-center gap-2">
    <FileQuestionMark />

    <p class="font-bold tracking-tight">404</p>

    <p class="font-semibold text-muted-foreground">Not found.</p>

    <Link route="home">
      <Button variant="outline">
        <ArrowLeft />
        Go back to home
      </Button>
    </Link>
  </div>
</template>
