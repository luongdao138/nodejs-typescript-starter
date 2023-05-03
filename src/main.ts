/* eslint-disable no-console */
import dotenv from 'dotenv-safe'
import express from 'express'

import appLoader, { ConfigModule, Logger } from '../nodejs-package-starter/dist'
import { GracefulShutdownServer } from '../nodejs-package-starter/dist/utils'

dotenv.config({ allowEmptyValues: true })
;(async () => {
  const start = async () => {
    const app = express()
    const directory = process.cwd()

    try {
      const { container } = await appLoader({ directory, expressApp: app })
      const configModule = container.resolve<ConfigModule>('configModule')
      const logger = container.resolve<Logger>('logger')

      const port = process.env.PORT ?? configModule.projectConfig.port ?? 9000

      const server = GracefulShutdownServer.create(
        app.listen(port, () => {
          logger.info(`Server listening on port ${port}`)
        }),
      )

      // Handle graceful shutdown
      const gracefulShutDown = () => {
        server
          .shutdown()
          .then(() => {
            logger.info('Gracefully stopping the server.')
            return process.exit(0)
          })
          .catch((e) => {
            logger.error('Error received when shutting down the server.', e)
            return process.exit(1)
          })
      }
      process.on('SIGTERM', gracefulShutDown)
      process.on('SIGINT', gracefulShutDown)
    } catch (error) {
      console.error('Error starting server.', error)
      process.exit(1)
    }
  }

  await start()
})()
