import { Organization, Role, Task } from '@joh/libs';
import { BaseEntity } from '@joh/libs/base';
import { Relation } from 'typeorm';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    role: Role;
    tasks: Relation<Task[]>;
    organization: Relation<Organization>;
    organizationId: number;
}
