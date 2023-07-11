import app from "./app.js";
import http from "http";

import * as dotenv from "dotenv";
import {connectDB} from "./Utils/connectMongodb.js";


dotenv.config()

const server = http.createServer(app);

const port: number = parseInt(process.env.PORT!) || 5000;

server.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});


