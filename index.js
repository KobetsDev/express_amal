
import dotenv from 'dotenv'
dotenv.config()
import { app } from './app.js'

const HOST = '0.0.0.0'
const PORT = process.env.PORT || 8000

app.listen(PORT, HOST, () => {
    console.log(`Server has been started on port ${PORT}`)
})