import express, { Express } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import todoRoutes from './routes/todoRoutes'
import { errorHandler, notFound } from './middleware/errorMiddleware'
dotenv.config()

connectDB()

const app: Express = express()

app.use(express.json())

app.use('/api/todos', todoRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    () => console.log(`Server running on port ${PORT}`)
)