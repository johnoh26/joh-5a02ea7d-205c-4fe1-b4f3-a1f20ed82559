import { __decorate, __metadata } from "tslib";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
export class BaseEntity {
}
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
__decorate([
    Column({ type: 'uuid', unique: true, nullable: false, default: () => 'uuid_generate_v4()' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "uuid", void 0);
__decorate([
    Column({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], BaseEntity.prototype, "isActive", void 0);
__decorate([
    Column({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], BaseEntity.prototype, "isArchived", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createDateTime", void 0);
__decorate([
    Column({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "createdBy", void 0);
__decorate([
    UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "lastChangedDateTime", void 0);
__decorate([
    Column({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "lastChangedBy", void 0);
__decorate([
    Column({ type: 'varchar', length: 300, nullable: true }),
    __metadata("design:type", String)
], BaseEntity.prototype, "internalComment", void 0);
//# sourceMappingURL=base.entity.js.map