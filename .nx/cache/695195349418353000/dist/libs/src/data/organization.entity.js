import { __decorate, __metadata } from "tslib";
import { User } from '@joh/libs';
import { BaseEntity } from '@joh/libs/base';
import { Column, Entity, OneToMany } from 'typeorm';
let Organization = class Organization extends BaseEntity {
};
__decorate([
    Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    OneToMany(() => User, user => user.organization),
    __metadata("design:type", Object)
], Organization.prototype, "users", void 0);
Organization = __decorate([
    Entity()
], Organization);
export { Organization };
//# sourceMappingURL=organization.entity.js.map