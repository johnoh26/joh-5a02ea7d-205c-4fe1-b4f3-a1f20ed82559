import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Audit } from 'libs/src/data/audit.entity';
import { AuditListResponse, AuditResponse } from 'libs/src/data/returns';
import { Repository } from 'typeorm';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(Audit)
    private auditRepository: Repository<Audit>
  ) {}

  async findAll(): Promise<AuditListResponse> {
    return this.auditRepository.find();
  }

  async findOne(id: number): Promise<AuditResponse | null> {
    return this.auditRepository.findOne({ where: { id } });
  }

  async create(Audit: Partial<Audit>): Promise<AuditResponse> {
    const newAudit = this.auditRepository.create(Audit);
    return this.auditRepository.save(newAudit);
  }

  async update(id: number, Audit: Partial<Audit>): Promise<AuditResponse | null> {
    await this.auditRepository.update(id, Audit);
    return this.auditRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.auditRepository.delete(id);
  }
}
