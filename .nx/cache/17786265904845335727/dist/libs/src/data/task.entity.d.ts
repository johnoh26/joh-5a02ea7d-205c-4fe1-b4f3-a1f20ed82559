import { BaseEntity } from '@joh/libs/base';
import { TaskStatus, User } from './index';
export declare class Task extends BaseEntity {
    content: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
