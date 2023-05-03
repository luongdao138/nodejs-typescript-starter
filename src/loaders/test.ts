import { Express } from 'express'

import { AppContainer, Logger } from '../../nodejs-package-starter/dist'

export default async function (container: AppContainer, app: Express) {
  const logger = container.resolve<Logger>('logger')

  app.use((_, __, next) => {
    logger.info('This is logging from custom loader!')
    next()
  })
}
