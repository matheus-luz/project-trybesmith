import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductsController {
  private ProductService;
  
  constructor() {
    this.ProductService = new ProductService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const Products = await this.ProductService.getAll();
    res.status(200).json(Products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.ProductService.create(product);
    res.status(201).json({ item: productCreated });
  };
}