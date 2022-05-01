import cors from 'cors'
import express from 'express'
import { router } from './routes'

const app = express()
const PORT = process.env.PORT || 3333
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(PORT, () => { console.log('Server started on port 3333') })