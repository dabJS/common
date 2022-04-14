import { status } from '@grpc/grpc-js';
import { GRPCError } from './grpc-error';

export class GRPCNotFoundError extends GRPCError {
  constructor(code: string, message: string, details?: Record<string, any>) {
    super(code, message, status.NOT_FOUND, details);
  }
}
