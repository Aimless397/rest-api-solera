import { Router } from 'express'

import asyncHandler from 'express-async-handler'

import { login } from '../controllers/auth.controller'

const router: Router = Router()

export const authRoutes = (): Router => {
  router.route('/login').post(asyncHandler(login))

  return router
}
