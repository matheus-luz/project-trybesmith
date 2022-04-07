import { Router } from 'express';
import UserController from '../controllers/users.controller';
import { 
  validateClasses, 
  validateLevel, validatePassword, validationUsername } from '../middlewares/user.middlewares';

const UserRouter = Router();

const UsersController = new UserController();

// Cadastrar um novo Usuário
UserRouter.post(
  '/',
  validationUsername,
  validateClasses,
  validateLevel,
  validatePassword,
  UsersController.create,
);

export default UserRouter;