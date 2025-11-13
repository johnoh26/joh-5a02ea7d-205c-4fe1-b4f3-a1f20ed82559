import { User } from '@joh/libs';
import { Relation } from 'typeorm';
import { BaseEntity } from './base/base.entity';
export declare class Organization extends BaseEntity {
    name: string;
    users: Relation<User[]>;
}
