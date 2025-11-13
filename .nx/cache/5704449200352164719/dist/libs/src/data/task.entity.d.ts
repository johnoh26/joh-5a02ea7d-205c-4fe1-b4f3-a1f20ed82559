import { TaskStatus, User } from '@joh-5a02ea7d-205c-4fe1-b4f3-a1f20ed82559/libs';
import { BaseEntity } from './base.entity';
export declare class Task extends BaseEntity {
    content: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
