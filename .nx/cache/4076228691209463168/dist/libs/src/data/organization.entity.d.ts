import { User } from './index';
import { BaseEntity } from '@joh/libs/base';
import { Relation } from 'typeorm';
export declare class Organization extends BaseEntity {
    name: string;
    users: Relation<User[]>;
}
