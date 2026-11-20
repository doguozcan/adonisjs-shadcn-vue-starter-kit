<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { usePage } from '@inertiajs/vue3'
import { ArrowLeft, Home, UserKey, UserPlus } from '@lucide/vue'

const page = usePage()
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

      <div v-if="page.props.user">
        <Link route="session.destroy">
          <Button>
            <ArrowLeft />
            Sign Out
          </Button>
        </Link>
      </div>

      <div v-else class="space-x-2">
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
    </div>
  </nav>

  <div class="flex p-4 min-h-[calc(100vh-(--spacing(16)))] bg-background">
    <slot />
  </div>

  <Toaster />
</template>
