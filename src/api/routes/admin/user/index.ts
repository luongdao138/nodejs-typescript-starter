import { Router } from 'express'

import { wrapHandler } from '../../../../../nodejs-package-starter/dist'

const userRoute = Router()

export default async function (baseRoute: Router) {
  userRoute.get('/:id', wrapHandler((await import('./get-user')).default))

  baseRoute.use('/users', userRoute)

  return baseRoute
}
