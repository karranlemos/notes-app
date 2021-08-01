import { IObjectOfType } from '../interfaces';
import { IErrorDataBase } from './IErrorData';

export default class BaseError extends Error {
  private code: string;
  private data: IObjectOfType<unknown>;

  protected constructor({
    code,
    message = null,
    ...data
  }: IErrorDataBase) {
    super(message || code);
    this.code = code;
    this.data = data;
  }

  getCode(): string {
    return this.code;
  }

  getData(key: string): unknown {
    return this.data[key];
  }
}
