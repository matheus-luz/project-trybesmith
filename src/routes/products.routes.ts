import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateAmount, validationName } from '../middlewares/product.middlewares';

const ProductRouter = Router();

const productsController = new ProductController();

// Buscar todos os Produtos
ProductRouter.get('/', productsController.getAll);

// Cadastrar um novo Produto
ProductRouter.post(
  '/', 
  validationName, 
  validateAmount, 
  productsController.create,
);

export default ProductRouter;