import cors from 'cors'
import { Router } from 'express'

import { ConfigModule, parseCorsOrigin } from '../../../../nodejs-package-starter/dist'

const frontRoute = Router()

export default function (masterRoute: Router, config: ConfigModule) {
  // apply front cors to front route
  const frontCors = parseCorsOrigin(config.projectConfig.front_cors || '')

  frontRoute.use(
    cors({
      credentials: true,
      origin: frontCors,
    }),
  )

  // init all children route belongs to front side

  masterRoute.use('/front', frontRoute)

  return masterRoute
}
