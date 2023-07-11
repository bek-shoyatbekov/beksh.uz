import {connect} from "mongoose";

import * as dotenv from "dotenv";

dotenv.config();

const mongo_uri = process.env.ENV === "dev" ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PROD;

export async function connectDB() {
    try {
        await connect(mongo_uri as string);
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.log("Error while connecting MongoDB");
        console.log(err);
        process.exit(1);
    }
}

