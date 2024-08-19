export interface Task {
  id: string;
  title: string;
  description?: string;
  isDone: boolean;
  createdAt: Date;
}
