import { __decorate, __metadata } from "tslib";
import { BaseEntity } from './base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Organization, Role, Task } from '@joh-5a02ea7d-205c-4fe1-b4f3-a1f20ed82559/libs';
let User = class User extends BaseEntity {
};
__decorate([
    Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    Column({
        type: "enum",
        enum: Role,
        default: Role.Viewer
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    OneToMany(() => Task, task => task.user),
    __metadata("design:type", Object)
], User.prototype, "tasks", void 0);
__decorate([
    ManyToOne(() => Organization, organization => organization.users),
    __metadata("design:type", Object)
], User.prototype, "organization", void 0);
__decorate([
    Column({ type: 'int' }),
    __metadata("design:type", Number)
], User.prototype, "organizationId", void 0);
User = __decorate([
    Entity()
], User);
export { User };
//# sourceMappingURL=user.entity.js.map