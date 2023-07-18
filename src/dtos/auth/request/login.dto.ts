import { IsNotEmpty, IsString } from 'class-validator'
import { BaseDto } from '../../base.dto'

export class LoginDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string

  @IsNotEmpty()
  @IsString()
  readonly password: string
}
