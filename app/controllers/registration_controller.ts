import User from '#models/user'
import { signUpValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegistrationController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/sign-up', {})
  }

  async store({ request, response, auth, session }: HttpContext) {
    const { fullName, email, password } = await request.validateUsing(signUpValidator)

    const user = await User.create({ fullName, email, password })

    await auth.use('web').login(user)

    session.flash('success', "You've signed up successfully!")

    response.redirect().toRoute('dashboard')
  }
}
