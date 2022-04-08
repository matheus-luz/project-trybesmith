import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const OrderRouter = Router();

const OrdersController = new OrderController();

OrderRouter.get('/', OrdersController.getAll);

export default OrderRouter;