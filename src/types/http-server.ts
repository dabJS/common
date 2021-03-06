import Joi from 'joi';
import { DependencyContainer } from 'tsyringe';

export abstract class Controller {
  abstract handle(req: HttpRequest): Promise<HttpResponse | void>;

  abstract exception(error: unknown): Error;

  path?: string;

  route_configs?: RouteConfig[];
}

export type HttpRequest = {
  body?: any;
  params: any;
  query?: any;
  headers?: any;
  user?: {
    username: string;
    emailAddress: string;
    name: string;
  };
};

export type HttpResponse<T = any> = {
  data?: T;
  headers?: any;
  status?: number;
};

export type RouteConfig = {
  method: string;
  version: string;
  path: string;
  schema: Joi.Schema;
  middlewares: Function[];
  status_code: number;
  has_schema: boolean;
};

export interface Middleware {
  handle(req: HttpRequest, error?: Error): HttpResponse | Promise<void>;
}

export type HttpServerConfig = {
  container: DependencyContainer;
  controllers: Function[];
  port: number;
  bodyLimit: string;
};
