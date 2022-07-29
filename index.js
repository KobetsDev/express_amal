
import dotenv from 'dotenv'
dotenv.config()
import { app } from './app.js'

const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT || 80

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server has been started on port ${PORT}`)
})