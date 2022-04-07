import express from 'express';
import 'express-async-errors';
import ProductRouter from './routes/products.routes';
import UserRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);

export default app;
