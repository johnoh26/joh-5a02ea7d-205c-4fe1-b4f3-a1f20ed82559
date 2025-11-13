import { BaseEntity } from './base.entity';
import { Relation } from 'typeorm';
import { Organization, Role, Task } from '@joh-5a02ea7d-205c-4fe1-b4f3-a1f20ed82559/libs';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    role: Role;
    tasks: Relation<Task[]>;
    organization: Relation<Organization>;
    organizationId: number;
}
