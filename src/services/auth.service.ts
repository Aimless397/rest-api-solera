import { plainToClass } from 'class-transformer'
import { Unauthorized } from 'http-errors'

import { LoginDto } from '../dtos/auth/request/login.dto'
import { UserDto } from '../dtos/auth/response/user.dto'
import { validatePassword } from '../helpers/passwordUtils'
import User from '../models/Users'

export class AuthService {
  static async login(input: LoginDto): Promise<UserDto> {
    const user = await User.findOne({
      where: { username: input.username },
      rejectOnEmpty: false,
    })

    if (!user) {
      throw new Unauthorized('Invalid credentials')
    }

    const isValid = await validatePassword(input.password, user.password)

    if (!isValid) {
      throw new Unauthorized('Invalid credentials')
    }

    return plainToClass(UserDto, user)
  }
}
