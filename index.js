import express from "express";
import * as dotenv from 'dotenv';
import { MongoClient } from "mongodb";
import cors from 'cors';
import userRouter from './routes/user.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log('mongodb is connected');

app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
    response.send("The server is Running!!!!");
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
export { client };
