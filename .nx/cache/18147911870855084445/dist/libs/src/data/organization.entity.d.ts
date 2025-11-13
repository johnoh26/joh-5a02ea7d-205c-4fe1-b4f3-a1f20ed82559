import { Relation } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { User } from './index';
export declare class Organization extends BaseEntity {
    name: string;
    users: Relation<User[]>;
}
