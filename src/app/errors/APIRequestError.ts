import codes from '../constants/codes';
import BaseError from './BaseError';
import { IErrorData } from './IErrorData';

export default class APIRequestError extends BaseError {
  public constructor({
    code = codes.API_REQUEST_ERROR,
    message = null,
    ...data
  }: IErrorData) {
    super({ code, message, ...data });
  }
}
