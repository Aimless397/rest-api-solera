import bcrypt from 'bcryptjs'

export const validatePassword = async (
  passwordBody: string,
  passwordUser: string
): Promise<boolean> => {
  return await bcrypt.compare(passwordBody, passwordUser)
}
