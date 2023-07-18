import express, { Application, NextFunction, Request, Response } from 'express'

import cors from 'cors'
import { plainToClass } from 'class-transformer'
import { HttpError } from 'http-errors'
import morgan from 'morgan'

import { db } from './database/database'
import { HttpErrorDto } from './dtos/http-error.dto'
import { router } from './routes/router'

const app: Application = express()
const ENVIRONMENT = process.env.NODE_ENV || 'development'

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err: any) => console.log(err))

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (ENVIRONMENT !== 'development') {
    console.log(err.message)
    console.log(err.stack || '')
  }

  res.status(err.status ?? 500)
  res.json(plainToClass(HttpErrorDto, err))
}

app.get('/api/v1/status', (req: Request, res: Response) => {
  res.json({ time: new Date() })
})

app.use('/', router(app))
app.use(errorHandler)

export default app
