import Joi from 'joi';
import { CodedError } from '../types/exception';

export class ValidationError extends CodedError {
  constructor(details: Joi.ValidationErrorItem[]) {
    super('VALIDATION_FAILED', 'Invalid request data', details);
  }
}
