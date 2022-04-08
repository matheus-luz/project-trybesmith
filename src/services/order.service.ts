import connection from '../models/connection';
import OrderModel from '../models/order.models';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll() {
    const ordersAll = await this.model.getAll();
    const orders = ordersAll
      .map(({ id, userId, products }) => ({ id, userId, products: [products] }));
    return orders;
  }
}