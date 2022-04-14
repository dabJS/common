import { ConsumeMessage, Channel } from 'amqplib';

export abstract class Consumer {
  abstract messageHandler(message: any): void;

  abstract onConsumeError(
    err: any,
    channel: Channel,
    message: ConsumeMessage | null
  ): ConsumerErrorOptions | void;

  queue: string;

  schema: any;

  has_schema: boolean;
}

export type ConsumerErrorOptions = {
  should_ack: boolean;
};
