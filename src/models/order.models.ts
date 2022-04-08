import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/Order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const query = `SELECT Ord.id as id, Ord.userId as userId, Prod.id as products 
    FROM Trybesmith.Orders as Ord
    INNER JOIN Trybesmith.Products AS Prod
    ON Ord.id = Prod.orderId`;
    
    const [result] = await this
      .connection.execute<RowDataPacket[]>(query);
    return result as IOrder[];
  }
}