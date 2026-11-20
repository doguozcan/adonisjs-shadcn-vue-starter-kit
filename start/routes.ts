/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')

router
  .group(() => {
    router.get('/sign-up', [controllers.Registration, 'create'])
    router.post('/sign-up', [controllers.Registration, 'store'])

    router.get('/sign-in', [controllers.Session, 'create'])
    router.post('/sign-in', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.on('/dashboard').renderInertia('dashboard', {}).as('dashboard')

    router.post('/sign-out', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
