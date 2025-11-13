import { Relation } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Organization, Role, Task } from './index';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    role: Role;
    tasks: Relation<Task[]>;
    organization: Relation<Organization>;
    organizationId: number;
}
