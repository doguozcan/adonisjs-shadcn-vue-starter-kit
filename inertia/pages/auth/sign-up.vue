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
      <CardTitle>Get Started!</CardTitle>
      <CardDescription>Create your account by entering your details.</CardDescription>
    </CardHeader>
    <CardContent>
      <Form v-slot="{ processing, errors }" route="registration.store">
        <FieldGroup>
          <Field>
            <FieldLabel for="fullName">Full Name</FieldLabel>
            <Input id="fullName" name="fullName" type="text" required />
            <FieldDescription v-if="errors.fullName" class="text-destructive">
              {{ errors.fullName }}
            </FieldDescription>
          </Field>
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
            <FieldLabel for="passwordConfirmation">Password Confirmation</FieldLabel>
            <Input id="passwordConfirmation" name="passwordConfirmation" type="password" />
            <FieldDescription v-if="errors.passwordConfirmation" class="text-destructive">
              {{ errors.passwordConfirmation }}
            </FieldDescription>
          </Field>
          <Field>
            <Button :disabled="processing">Sign Up</Button>
            <FieldDescription class="text-center">
              Already have an account? <Link route="session.create">Sign in!</Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </Form>
    </CardContent>
  </Card>
</template>
