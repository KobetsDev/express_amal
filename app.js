
import express from 'express'
import nunjucks from 'nunjucks'
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import mongoose from 'mongoose'
import router from './routes/index.js'
const app = express()

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error))


// шаблонизатор
app.set('view engine', 'html')
nunjucks.configure('templates', {
    autoescape: true,
    express: app
})
console.log()
app.use('/static', express.static((path.resolve('static'))))//__dirname, 'static')))
app.disable('etag')

app.use('/', router)

export { app };

