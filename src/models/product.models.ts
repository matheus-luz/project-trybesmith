import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/Product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this
      .connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return result as IProduct[];
  }

  public async create(product: IProduct): Promise<IProduct> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [product.name, product.amount],
    );
    const { insertId } = result;
    return { id: insertId, ...product };
  }
}