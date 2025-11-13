import { Column, Entity, OneToMany, Relation } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity()
export class Organization extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => User, user => user.organization)
  users: Relation<User[]>;
}
