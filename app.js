import express from 'express'
import workRouter from './src/routes/works.js'

const app = express()
app.use(express.json())
app.use(workRouter)

app.listen(3000, () => console.log("Server running on port 3000"))