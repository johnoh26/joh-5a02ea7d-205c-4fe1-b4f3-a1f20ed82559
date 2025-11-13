import { Organization, Role, Task } from '@joh/libs';
import { Relation } from 'typeorm';
import { BaseEntity } from './base/base.entity';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    role: Role;
    tasks: Relation<Task[]>;
    organization: Relation<Organization>;
    organizationId: number;
}
