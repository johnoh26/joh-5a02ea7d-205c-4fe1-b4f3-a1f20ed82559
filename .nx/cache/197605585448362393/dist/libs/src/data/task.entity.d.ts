import { BaseEntity } from './base.entity';
import { TaskStatus } from './enums';
import { User } from './user.entity';
export declare class Task extends BaseEntity {
    content: string;
    status: TaskStatus;
    user: User;
    userId: number;
}
