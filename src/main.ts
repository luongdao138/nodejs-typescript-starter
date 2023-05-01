/* eslint-disable no-console */
import dotenv from 'dotenv-safe'
import express from 'express'

import { appLoader } from '../nodejs-package-starter/dist'
import { GracefulShutdownServer } from '../nodejs-package-starter/dist/utils'

dotenv.config()
;(async () => {
  const start = async () => {
    const app = express()
    const directory = process.cwd()

    try {
      await appLoader({ directory, expressApp: app })

      const port = process.env.PORT ?? 9000

      const server = GracefulShutdownServer.create(
        app.listen(port, () => {
          console.log(`Server listening on port ${port}`)
        }),
      )

      // Handle graceful shutdown
      const gracefulShutDown = () => {
        server
          .shutdown()
          .then(() => {
            console.info('Gracefully stopping the server.')
            return process.exit(0)
          })
          .catch((e) => {
            console.error('Error received when shutting down the server.', e)
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
