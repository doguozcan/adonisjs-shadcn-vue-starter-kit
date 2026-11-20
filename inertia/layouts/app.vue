<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { Home, UserKey, UserPlus } from '@lucide/vue'
</script>

<template>
  <nav class="sticky top-0 z-50 flex p-4 border-b bg-background">
    <Link route="home">
      <Button variant="outline">
        <Home />
        VISA
      </Button>
    </Link>

    <div class="flex flex-1 justify-end space-x-2">
      <Theme />

      <Link route="session.create">
        <Button variant="outline">
          <UserKey />
          Sign In
        </Button>
      </Link>

      <Link route="registration.create">
        <Button>
          <UserPlus />
          Sign Up
        </Button>
      </Link>
    </div>
  </nav>

  <div class="flex p-4 min-h-[calc(100vh-(--spacing(16)))] bg-background">
    <slot />
  </div>

  <Toaster />
</template>
