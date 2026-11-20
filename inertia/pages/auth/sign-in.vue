<script setup lang="ts">
import { Form, Link } from '@adonisjs/inertia/vue'
import AppLayout from '~/layouts/app.vue'

defineOptions({
  layout: AppLayout,
})
</script>

<template>
  <Card class="w-full max-w-lg">
    <CardHeader>
      <CardTitle>Welcome Back!</CardTitle>
      <CardDescription>Enter your credentials to access your account.</CardDescription>
    </CardHeader>
    <CardContent>
      <Form v-slot="{ processing, errors }" route="session.store">
        <FieldGroup>
          <Field>
            <FieldLabel for="email">Email</FieldLabel>
            <Input id="email" name="email" type="text" required />
            <FieldDescription v-if="errors.email" class="text-destructive">
              {{ errors.email }}
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel for="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" />
            <FieldDescription v-if="errors.password" class="text-destructive">
              {{ errors.password }}
            </FieldDescription>
          </Field>
          <Field>
            <Button :disabled="processing">Sign In</Button>
            <FieldDescription class="text-center">
              Don't have an account? <Link route="registration.create">Sign up!</Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </Form>
    </CardContent>
  </Card>
</template>
