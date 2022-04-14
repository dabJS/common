import { CodedError } from '../../types/exception';

export class GRPCError extends CodedError {
  status_code: number;

  constructor(
    code: string,
    message: string,
    status_code: number,
    details?: Record<string, any>
  ) {
    super(code, message, details);
    this.status_code = status_code;
  }
}
