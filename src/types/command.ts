export interface RunnerArgs {
  readonly uuid: string;
  readonly instance: string;
}

export interface Command {
  run(args?: RunnerArgs): Promise<void>;
  readonly name: string;
  readonly schedule: string;
  readonly group: string;
}
