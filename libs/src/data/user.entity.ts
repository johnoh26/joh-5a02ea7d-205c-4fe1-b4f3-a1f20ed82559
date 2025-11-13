import { Column, Entity, ManyToOne, OneToMany, Relation } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './enums';
import { Organization } from './organization.entity';
import { Task } from './task.entity';


@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  passwordHash: string;
  
  @Column({  
    type: "enum",
    enum: Role,
    default: Role.Viewer
  })
  role: Role;

  @OneToMany(() => Task, task => task.user)
  tasks: Relation<Task[]>;

  @ManyToOne(() => Organization, organization => organization.users, { nullable: true })
  organization: Relation<Organization>;

  @Column({ type: 'int', nullable: true })
  organizationId: number; // foreign key column
}
