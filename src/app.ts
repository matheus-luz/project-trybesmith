import express from 'express';
import 'express-async-errors';

import Product from './routes/products.routes';

const app = express();

app.use(express.json());

app.get('/products', Product);

export default app;
