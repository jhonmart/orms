import express from 'express'
import userRoutes from './routes/userRoutes.js'
import systemRoutes from './routes/systemRoutes.js'

const app = express()

app.use(express.json())

app.use('/users', userRoutes)
app.use('/system', systemRoutes)

export default app
