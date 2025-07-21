import express from 'express'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import workRouter from './src/routes/works.js'
import employeeRouter from './src/routes/employees.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', workRouter)
app.use('/api', employeeRouter)

app.listen(3000, () => console.log("Server running on port 3000"))