<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { ArrowLeft, ServerCrash } from '@lucide/vue'
</script>

<template>
  <div class="flex flex-col min-h-screen justify-center items-center gap-2">
    <ServerCrash />

    <p class="font-bold tracking-tight">500</p>

    <p class="font-semibold text-muted-foreground">Server error.</p>

    <Link route="home">
      <Button variant="outline">
        <ArrowLeft />
        Go back to home
      </Button>
    </Link>
  </div>
</template>
