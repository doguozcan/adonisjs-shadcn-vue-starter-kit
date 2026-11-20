import { configApp } from '@adonisjs/eslint-config'
import { vue } from '@adonisjs/eslint-config/vue'

export default configApp(
  ...vue,
  {
    files: ['inertia/**/*.ts'],
    rules: {
      'vue/component-api-style': 'off',
    },
  },
  {
    files: ['inertia/**/*.vue'],
    rules: {
      '@unicorn/filename-case': 'off',
      'vue/require-default-prop': 'off',
    },
  }
)
