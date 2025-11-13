import { BaseEntity } from '@joh-5a02ea7d-205c-4fe1-b4f3-a1f20ed82559/libs';
import { Role } from './enums';
import { Organization } from './organization.entity';
import { Task } from './task.entity';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    role: Role;
    tasks: Task[];
    organization: Organization;
    organizationId: number;
}
