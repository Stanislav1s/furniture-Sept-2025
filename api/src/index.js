import express from "express";
import cors from "cors"
import routes from "./routes.js";
import mongoose from "mongoose"

const app = express();
try {
    await mongoose.connect('mongodb://localhost:27017/', {
        dbName: "furnitureBackend"
    });
    console.log('Connected to the DB')
} catch (err) {
    console.error('Cannot connect to the DB!')
    console.error(err.message)
}

app.use(cors());
app.use(express.json())

app.use(routes);
app.listen(3030, () => 'server is listening on http://localhost:3030...')