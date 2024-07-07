// message, status code, error codes, error

export class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: ErrorCode;

  constructor(
    message: string,
    errorCode: ErrorCode,
    statusCode: number,
    error: any
  ) {
    super(message);

    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = error;
  }
}

export enum ErrorCode {
  UserNotFound = 1001,
  UserAlreadyExists = 1002,
  IncorrectPassword = 1003,
  UnprocessableEntity = 1005,
  InternalException = 1006,
  UnAuthorized = 1007,
}
