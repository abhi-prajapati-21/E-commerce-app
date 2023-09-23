import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoDBService from './Database/db.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
dotenv.config();

app.get('/', (req,res) => {
    res.send('Next.js Server')
})

app.listen(PORT, () => {console.log('server is running on 5000')})

mongoDBService.connectToServer();
