import connection from '../models/connection';
import ProductModel from '../models/product.models';
import { IProduct } from '../interfaces/Product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const product = await this.model.getAll();
    return product;
  }
}