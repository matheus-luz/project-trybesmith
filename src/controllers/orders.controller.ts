import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrdersController {
  private OrderService;
  
  constructor() {
    this.OrderService = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.OrderService.getAll();
    res.status(200).json(orders);
  };
}
