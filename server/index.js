import express from 'express'
import { PORT } from './config.js'
import indexPage from './routes/index.routes.js'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(morgan('dev'))
app.use(express.json())

app.use(indexPage)

app.listen(PORT)
console.log(`Servidor en el puerto ${PORT}`)