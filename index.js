
import dotenv from 'dotenv'
dotenv.config()
import { app } from './app.js'

const HOST = '85.193.80.201'
const PORT = process.env.PORT || 8000

app.listen(PORT, HOST, () => {
    console.log(`Server has been started on port ${PORT}`)
})