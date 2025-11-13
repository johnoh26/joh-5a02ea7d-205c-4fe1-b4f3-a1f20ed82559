import { BaseEntity } from './base.entity';
import { User } from './user.entity';
export declare class Organization extends BaseEntity {
    name: string;
    users: User[];
}
