import { IObjectOfType } from '../interfaces';

export interface IErrorData {
  code?: string;
  message?: string | null;
  params?: IObjectOfType<unknown>;
  [key: string]: unknown;
}

export interface IErrorDataBase extends IErrorData {
  code: string;
  message?: string | null;
  params?: IObjectOfType<unknown>;
  [key: string]: unknown;
}
