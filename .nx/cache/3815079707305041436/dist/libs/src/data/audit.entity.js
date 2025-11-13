"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audit = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base/base.entity");
let Audit = class Audit extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "content", void 0);
Audit = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Audit);
exports.Audit = Audit;
//# sourceMappingURL=audit.entity.js.map