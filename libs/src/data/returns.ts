import { Audit } from './audit.entity';
import { Task } from './task.entity';
import { User } from './user.entity';

export type AuditResponse = Audit;
export type AuditListResponse = Audit[];

export type TaskResponse = Task;
export type TaskListResponse = Task[];

export type UserResponse = User;
export type UserListResponse = User[];
