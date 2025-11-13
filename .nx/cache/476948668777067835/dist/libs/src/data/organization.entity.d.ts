import { BaseEntity, User } from '@joh-5a02ea7d-205c-4fe1-b4f3-a1f20ed82559/libs';
import { Relation } from 'typeorm';
export declare class Organization extends BaseEntity {
    name: string;
    users: Relation<User[]>;
}
