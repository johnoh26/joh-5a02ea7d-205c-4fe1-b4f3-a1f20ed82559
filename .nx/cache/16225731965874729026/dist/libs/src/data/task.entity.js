"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const enums_1 = require("./enums");
const user_entity_1 = require("./user.entity");
let Task = class Task extends base_entity_1.BaseEntity {
};
exports.Task = Task;
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "content", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "enum",
        enum: enums_1.TaskStatus,
        default: enums_1.TaskStatus.Pending }),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Task.prototype, "priority", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.tasks),
    tslib_1.__metadata("design:type", user_entity_1.User)
], Task.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Task.prototype, "userId", void 0);
exports.Task = Task = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Task);
//# sourceMappingURL=task.entity.js.map