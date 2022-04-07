import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/user.service';

const jwtConfig = { expiresIn: '7d' };

const SECRET = process.env.JWT_SECRET as string;

export default class UsersController {
  private UserService;
  
  constructor() {
    this.UserService = new UserService();
  }
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await this.UserService.create(user);
    const token = jwt.sign({ newUser }, SECRET, jwtConfig);
    res.status(201).json({ token });
  };
}