// src/app/models/task.model.ts
export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface Task {
  id?: number;
  title: string;
  description?: string | null;
  status: TaskStatus;
  createdAt?: string;
}
