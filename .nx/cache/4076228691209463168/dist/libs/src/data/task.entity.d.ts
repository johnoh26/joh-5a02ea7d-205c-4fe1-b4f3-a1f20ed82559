import { BaseEntity } from '@joh/libs/base';
import { TaskStatus } from '@joh/libs';
export declare class Task extends BaseEntity {
    content: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
import { User } from './user.entity';
