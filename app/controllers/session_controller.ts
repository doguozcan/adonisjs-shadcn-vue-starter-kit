import User from '#models/user'
import { signInValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/sign-in', {})
  }

  async store({ request, auth, response, session }: HttpContext) {
    const { email, password } = await request.validateUsing(signInValidator)

    const user = await User.verifyCredentials(email, password)

    session.flash('success', "You've signed in successfully!")

    await auth.use('web').login(user)

    return response.redirect().toRoute('dashboard')
  }

  async destroy({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()

    session.flash('success', "You've signed out successfully!")

    return response.redirect().toRoute('session.create')
  }
}
