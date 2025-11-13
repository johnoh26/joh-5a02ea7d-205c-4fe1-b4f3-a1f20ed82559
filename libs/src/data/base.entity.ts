import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'uuid', unique: true, nullable: false, default: () => 'uuid_generate_v4()'})
  uuid: string;

  @Column({type: 'boolean', default: true})
  isActive: boolean;

  @Column({type: 'boolean', default: false})
  isArchived: boolean;

  @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  createDateTime: Date;

  @Column({type: 'int', nullable: true})
  createdBy: number | null;

  @UpdateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  lastChangedDateTime: Date;

  @Column({type: 'int', nullable: true})
  lastChangedBy: number | null;

  @Column({type: 'varchar', length: 300, nullable: true})
  internalComment: string | null;
}
