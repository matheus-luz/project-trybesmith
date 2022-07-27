import { IToken } from '../../interfaces/Token';

declare module 'express-serve-static-core' {
  interface Request {
    tokenData?: IToken,
  }
}