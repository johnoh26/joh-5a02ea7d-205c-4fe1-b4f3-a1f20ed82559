import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Audit extends BaseEntity {
  @Column()
  content: string;
}
