import { Controller, Get } from '@nestjs/common';
import { Audit } from 'libs/src/data/audit.entity';
import { Role } from 'libs/src/data/enums';
import { Roles } from '../auth/roles.decorator';
import { AuditService } from './audit.service';

@Controller('Audits')
export class AuditController {
  constructor(private readonly AuditService: AuditService) {}

  @Get('audit-log')
  @Roles(Role.Admin)
  async findAll(): Promise<Audit[]> {
    return this.AuditService.findAll();
  }
}
