import { BaseEntity } from './base.entity';
import { TaskStatus, User } from './index';
export declare class Task extends BaseEntity {
    content: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
