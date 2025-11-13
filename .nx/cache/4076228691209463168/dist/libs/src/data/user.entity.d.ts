import { BaseEntity } from '@joh/libs/base';
import { Relation } from 'typeorm';
import { Role } from '@joh/libs';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    role: Role;
    tasks: Relation<Task[]>;
    organization: Relation<Organization>;
    organizationId: number;
}
import { Organization } from './organization.entity';
import { Task } from './task.entity';
