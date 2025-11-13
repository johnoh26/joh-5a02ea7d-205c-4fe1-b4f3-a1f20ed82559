import { Relation } from 'typeorm';
import { BaseEntity } from '@joh/libs/base';
import { User } from './index';
export declare class Organization extends BaseEntity {
    name: string;
    users: Relation<User[]>;
}
