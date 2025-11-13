import { TaskStatus, User } from '@joh/libs';
import { BaseEntity } from './base/base.entity';
export declare class Task extends BaseEntity {
    content: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
