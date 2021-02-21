import express, { Express } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import todoRoutes from './routes/todoRoutes'
dotenv.config()

connectDB()

const app: Express = express()

app.use(express.json())

app.use('/api/todos', todoRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)