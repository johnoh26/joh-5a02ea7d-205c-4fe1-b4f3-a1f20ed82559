import { Relation } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './enums';
import { Organization } from './organization.entity';
import { Task } from './task.entity';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    role: Role;
    tasks: Relation<Task[]>;
    organization: Relation<Organization>;
    organizationId: number;
}
