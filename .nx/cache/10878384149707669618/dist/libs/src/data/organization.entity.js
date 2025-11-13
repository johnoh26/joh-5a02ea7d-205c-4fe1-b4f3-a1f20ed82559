"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
let Organization = class Organization extends base_entity_1.BaseEntity {
};
exports.Organization = Organization;
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], Organization.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, user => user.organization),
    tslib_1.__metadata("design:type", Object)
], Organization.prototype, "users", void 0);
exports.Organization = Organization = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Organization);
//# sourceMappingURL=organization.entity.js.map