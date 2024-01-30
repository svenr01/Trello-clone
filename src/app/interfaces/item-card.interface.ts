export interface Item {
  id: number;
  title: string;
  description: string;
  status: ItemStatus;
  createdAt: Date;
  updatedAt: Date;
}

export const ItemStatuses = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const;

export type ItemStatus = (typeof ItemStatuses)[keyof typeof ItemStatuses];
