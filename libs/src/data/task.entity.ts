import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TaskStatus } from './enums';
import { User } from './user.entity';

@Entity()
export class Task extends BaseEntity {
  @Column({ type: 'varchar' })
  content: string;
  
  @Column({  type: "enum",
      enum: TaskStatus,
      default: TaskStatus.Pending })
  status: TaskStatus;

  @Column({ type: 'int', nullable: true })
  priority: number;

  @ManyToOne(() => User, user => user.tasks)
  user: User;

  @Column({ type: 'int' })
  userId: number; // foreign key column
}
