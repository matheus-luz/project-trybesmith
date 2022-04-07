import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/User.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [user.username, user.classe, user.level, user.password],
    );
    return { ...user };
  }
}