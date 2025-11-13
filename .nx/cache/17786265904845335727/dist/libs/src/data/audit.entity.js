import { __decorate, __metadata } from "tslib";
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@joh/libs/base';
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