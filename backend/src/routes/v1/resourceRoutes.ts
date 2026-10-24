import { Router } from 'express'
import {
  create,
  get,
  list,
  remove,
  update,
} from '../../controllers/resourceController.js'
import { resources, type ResourceName } from '../../models/resources.js'

export const resourceRouter = Router()

for (const resourceName of Object.keys(resources) as ResourceName[]) {
  const router = Router()

  router.get('/', list(resourceName))
  router.post('/', create(resourceName))
  router.get('/:id', get(resourceName))
  router.patch('/:id', update(resourceName))
  router.delete('/:id', remove(resourceName))

  resourceRouter.use(`/${resourceName}`, router)
}
