import { db } from '../database/database'
import { DataTypes, Model } from 'sequelize'

export interface IUser {
  id: number
  username: string
  password: string
  fullName: string
  createdAt: Date
  updatedAt: Date
}

interface UserInstance extends Model<IUser, any>, IUser {}

const User = db.define<UserInstance>('Users', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})

export default User
