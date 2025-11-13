"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const enums_1 = require("./enums");
const organization_entity_1 = require("./organization.entity");
const task_entity_1 = require("./task.entity");
let User = class User extends base_entity_1.BaseEntity {
};
exports.User = User;
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.Role,
        default: enums_1.Role.Viewer
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, task => task.user),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "tasks", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => organization_entity_1.Organization, organization => organization.users),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "organization", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "organizationId", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map