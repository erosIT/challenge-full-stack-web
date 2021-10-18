import { Router } from 'express'

import studentRoutes from './student'

const routes = Router()

//
// Students routes
//
routes.use('/students', studentRoutes)

export default routes
