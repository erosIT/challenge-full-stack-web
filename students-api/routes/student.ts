import { Router } from 'express'

import { StudentController } from '../src/controllers/StudentController'

const routes = Router()

routes.get('/', StudentController.index)
routes.post('/', StudentController.store)
routes.get('/:id', StudentController.show)
routes.put('/:id', StudentController.update)
routes.delete('/:id', StudentController.delete)

export default routes
