import { Sequelize } from "sequelize"
import { config } from 'dotenv'
config()

const DB_DEPLOY = process.env.DB_DEPLOY;

export const sequelize = new Sequelize(
  DB_DEPLOY,
  {
  logging: false,
  native: false,
})
