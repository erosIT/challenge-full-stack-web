import express, { Application } from 'express'
import cors from 'cors'

import routes from '../routes'

/**
 *
 *
 * @class App
 */
class App {
  public express: Application;

  /**
   * Creates an instance of App.
   * @memberof App
   */
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  /**
   *
   *
   * @private
   * @memberof App
   */
  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  /**
   *
   *
   * @private
   * @memberof App
   */
  private routes (): void {
    this.express.use('/api', routes)
  }
}

export default new App().express
