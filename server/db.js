import { createPool } from "mysql2/promise"
import {
    DB_PORT,
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_USER
} from './config.js'

export const pool = createPool({
    port: DB_PORT,
    host: DB_HOST,
    password: DB_PASSWORD,
    user: DB_USER,
    database: DB_DATABASE
})