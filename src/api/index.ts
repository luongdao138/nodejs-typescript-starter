import { Router } from 'express'

import { ConfigModule } from '../../nodejs-package-starter/dist'
import initAdminRoute from './routes/admin'
import initFrontRoute from './routes/front'

export default function (rootDirectory: string, configModule: ConfigModule): Router[] | Router {
  // add your custom router here
  const customRoute = Router()

  initAdminRoute(customRoute, configModule)
  initFrontRoute(customRoute, configModule)

  return [customRoute]
}
