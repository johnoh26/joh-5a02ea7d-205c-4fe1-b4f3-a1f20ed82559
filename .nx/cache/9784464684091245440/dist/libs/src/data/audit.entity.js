import { __decorate, __metadata } from "tslib";
import { BaseEntity } from '@joh-5a02ea7d-205c-4fe1-b4f3-a1f20ed82559/libs';
import { Column, Entity } from 'typeorm';
let Audit = class Audit extends BaseEntity {
};
__decorate([
    Column(),
    __metadata("design:type", String)
], Audit.prototype, "content", void 0);
Audit = __decorate([
    Entity()
], Audit);
export { Audit };
//# sourceMappingURL=audit.entity.js.map