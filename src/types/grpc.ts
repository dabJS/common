import Joi from 'joi';

export type GRPCConfig = {
  proto: string;
  implementation: string;
  schema?: Joi.Schema;
  service: string;
};

export type GRPCResponse<T = any> = {
  data?: T;
};

export type GRPCRequest<T = any> = {
  request: T;
};

export abstract class ProtoBuff {
  proto: string;

  service_configs?: GRPCConfig[];

  abstract handle(request: GRPCRequest): Promise<GRPCResponse>;

  abstract exception(error: unknown): Error;
}

export type GRPCClientOptions = {
  host: string;
  service: string;
  path: string;
};

export interface GRPCClient {
  createInstance<T>(options: GRPCClientOptions): T;
}
