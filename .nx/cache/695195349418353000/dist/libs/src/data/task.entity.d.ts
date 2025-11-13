import { TaskStatus, User } from '@joh/libs';
import { BaseEntity } from '@joh/libs/base';
export declare class Task extends BaseEntity {
    content: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
