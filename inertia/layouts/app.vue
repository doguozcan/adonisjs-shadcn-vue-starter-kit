<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { usePage } from '@inertiajs/vue3'
import { LogOut, Home, UserKey, UserPlus, LayoutDashboard } from '@lucide/vue'
import { computed } from 'vue'

const page = usePage()
const user = computed(() => page.props.user)
</script>

<template>
  <nav class="sticky top-0 z-50 flex p-4 border-b bg-background">
    <div class="flex gap-2">
      <Link route="home">
        <Button :variant="page.url === '/' ? 'default' : 'outline'">
          <Home />
          VISA
        </Button>
      </Link>

      <Separator v-if="user" orientation="vertical" />

      <Link v-if="user" route="dashboard">
        <Button :variant="page.url.startsWith('/dashboard') ? 'default' : 'outline'">
          <LayoutDashboard />
          Dashboard
        </Button>
      </Link>
    </div>

    <div class="flex flex-1 justify-end space-x-2">
      <Theme />

      <div v-if="user">
        <Link route="session.destroy">
          <Button>
            <LogOut />
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
