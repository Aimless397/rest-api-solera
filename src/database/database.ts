import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'

export const db = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    dialect: 'mysql',
    dialectModule: mysql2,
    port: Number(process.env.DB_PORT),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
)
