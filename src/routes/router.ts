import express, { Router } from 'express'

import { authRoutes } from './auth.routes'

const expressRouter = express.Router()

export const router = (app: Router) => {
  app.use('/api/v1/auth', authRoutes())

  return expressRouter
}
