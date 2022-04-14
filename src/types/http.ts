export interface Http {
  get<T = any, R = HttpIntegrationResponse<T>>(
    url: string,
    config?: HttpIntegrationConfig
  ): Promise<R>;
  post<T = any, R = HttpIntegrationResponse<T>>(
    url: string,
    data?: any,
    config?: HttpIntegrationConfig
  ): Promise<R>;
  delete<T = any, R = HttpIntegrationResponse<T>>(
    url: string,
    config?: HttpIntegrationConfig
  ): Promise<R>;
  patch<T = any, R = HttpIntegrationResponse<T>>(
    url: string,
    data?: any,
    config?: HttpIntegrationConfig
  ): Promise<R>;
  put<T = any, R = HttpIntegrationResponse<T>>(
    url: string,
    data?: any,
    config?: HttpIntegrationConfig
  ): Promise<R>;

  createInstance(confg: HttpIntegrationConfig): void;
}

export interface HttpIntegrationConfig {
  url?: string;
  method?: string;
  base_url?: string;
  headers?: {};
  params?: string;
  data?: string;
  timeout?: number;
}

export interface HttpIntegrationResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
