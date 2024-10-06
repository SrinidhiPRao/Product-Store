import express from 'express';
import { connectDatabase } from './db.js';

const app = express();

app.post("/products", (request, response) => {
    
})

app.listen(5000, () => {
    connectDatabase();
    console.log("Server started at http://localhost:5000");
});