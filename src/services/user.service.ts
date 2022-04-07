import connection from '../models/connection';
import UserModel from '../models/user.models';
import { IUser } from '../interfaces/User.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}