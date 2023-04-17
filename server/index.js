import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

const PORT = process.env.PORT || 8080;
dotenv.config()

const app = express()
app.use(cors())

app.use(express.json({ limit: '50mb'}))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async(req, res) => {
    res.send('Hello from Ojijo')
})

const startServer = async() => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server Started at Port ${PORT}`)
         });
    } catch (error) {
        console.log(error);
    }
}

startServer()