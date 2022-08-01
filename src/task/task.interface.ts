export enum StatusEnum {
  CREATED = 'created',
  PROCESSING = 'processing',
  ABORTED = 'aborted',
  ERROR = 'error',
  DONE = 'done',
}

export interface TaskI {
  task: string;
  id: number;
  status: StatusEnum;
  tags: string[];
  createdAt: Date;
  updateAt: Date;
}
