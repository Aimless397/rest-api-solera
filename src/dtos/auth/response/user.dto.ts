import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class UserDto {
  @Expose()
  readonly fullName: string
}
