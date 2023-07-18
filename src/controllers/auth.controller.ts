import { Request, Response } from 'express'

import { plainToClass } from 'class-transformer'

import { AuthService } from '../services/auth.service'
import { LoginDto } from '../dtos/auth/request/login.dto'

export const login = async (req: Request, res: Response) => {
  const loginDto = plainToClass(LoginDto, req.body)
  await loginDto.isValid()

  const result = await AuthService.login(loginDto)

  res.status(200).json(result)
}
