import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { connectDatabase } from './db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Allows us to accept json data in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDatabase();
    console.log("Server started at http://localhost:5000");
});