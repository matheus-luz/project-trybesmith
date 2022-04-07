import express from 'express';
import 'express-async-errors';
import ProductRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

export default app;
