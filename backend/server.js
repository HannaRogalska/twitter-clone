import express from 'express';
import authRotes from './routes/auth.routes.js'
import dotenv from 'dotenv';
import { connectMongoDB } from './db/connectMongoDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRotes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
    connectMongoDB();
});